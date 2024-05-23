'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header_fixed.module.scss'

export default function HeaderFixed ()  {

    // Add and Remove Class on scroll
    const [scrolltopdata, setscrolltopdata] = useState('');
    const [menuLink, getMenuItems] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 200) {
                setscrolltopdata('');
            } else {
                setscrolltopdata(styles.header_fixed_active);
            }
        });
    }, [])

    const query = `query primaryMenu {
        menuItems(where: {location: PRIMARY_MENU}, first: 50) {
          nodes {
            key: id
            parentId
            label
            path
            cssClasses
            target
          }
        }
    }`

    useEffect(() => {

        const fetchMenu = async () => {

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'  },
                    body: JSON.stringify({ query }),
                  })
                  const data = await res.json();
                  getMenuItems(data);
            }
            catch(error) {
                console.log(error)
            }

        };
    
        fetchMenu();
    
    }, []);

    
    const menuItems = menuLink?.data?.menuItems?.nodes;
  
      const flatListToHierarchical = (
          menuItems = [],
          { idKey='key', parentKey='parentId', childrenKey = 'children'} = {}) => {
  
          const tree = [];
          const childrenOf = {};
  
          menuItems.forEach((item) => {
  
              const newItem = {...item};
  
              const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
              
              childrenOf[id] = childrenOf[id] || [];
              newItem[childrenKey] = childrenOf[id];
              parentId  ? (
                      childrenOf[parentId] = childrenOf[parentId] || []
                  ).push(newItem)
                  : tree.push(newItem);
          });
          return tree;
      };
  
    const hierarchicalList = flatListToHierarchical( menuItems );

    return (
        <header className={`${styles.header_fixed} hidden lg:block fixed w-full z-50 bg-secondary ${scrolltopdata}`}>
            <div className="container py-4 flex items-center justify-between">
                <Link href="/" aria-label="Granite 5">
                    <Image
                        priority
                        src="/logo-5.svg" 
                        width={35}
                        height={52}
                        alt="" />
                </Link>

                <nav className={styles.fixed_menu}>
                <ul>
                    {hierarchicalList?.map((row, i) => {
                        return(
                            <li key={i}>
                                <a href={ row.path}>{ row.label}</a>
                                {row.children != '' && 
                                    <ul className={`${styles.fixed_menu__sub} ${styles.fixed_menu__second}`}>
                                        {row.children.map((child, i) => {
                                            return(
                                                <li key={i}>
                                                    <a href={ child.path}>{ child.label}</a>

                                                    {child.children !='' && 
                                                      <ul className={`${styles.fixed_menu__sub} ${styles.fixed_menu__third}`}>
                                                        {child.children.map((grandchild, i) => {
                                                            return(
                                                                <li key={i}>
                                                                    <a href={ grandchild.path}>{ grandchild.label}</a>
                                                                </li>
                                                            )
                                                        })
                                                        }
                                                    </ul>
                                                }

                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                }
                            </li>
                        )
                    })
                    }
                </ul>
                </nav>
               
            </div>
        </header>
    )

}