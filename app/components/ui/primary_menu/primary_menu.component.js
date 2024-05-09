// 'use client'
//  import { useContext } from "react"
// import globalContext from "@/app/context/context";
// import Hamburger from '../hamburger_menu/hamburger.component';
import styles from './primary_menu.module.scss'

export default async function PrimaryMenu () {

//    const { state, dispatch } = useContext(globalContext);

//    const menuStatus = state.menuOpen == true && styles.primary_menu__open;

const getMenu = async () => {
  
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
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADLESS_GRAPHQL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
    return res.json();
  }

  const menu = await getMenu();
  const menuItems = menu.data.menuItems;

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

     const hierarchicalList = flatListToHierarchical( menuItems.nodes );

    return (
        <>
          <div className='flex items-center justify-between relative'>
              {/* <Hamburger /> */}
              <nav className={styles.primary_menu}>
                <ul>
                    {hierarchicalList?.map((row, i) => {
                        return(
                            <li key={i}>
                                <a href={ row.path}>{ row.label}</a>
                                {row.children != '' && 
                                    <ul className={`${styles.primary_menu__sub} ${styles.primary_menu__second}`}>
                                        {row.children.map((child, i) => {
                                            return(
                                                <li key={i}>
                                                    <a href={ child.path}>{ child.label}</a>

                                                    {child.children !='' && 
                                                      <ul className={`${styles.primary_menu__sub} ${styles.primary_menu__third}`}>
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
        </>
    )
}