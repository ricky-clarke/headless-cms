import './module_title.scss';

export default function ModuleTitle ( props ) {

    const {mod_title, mod_type } = props;

    return (
        <>
           { mod_type === 'h2' ?
            <h2 className="module_title" dangerouslySetInnerHTML={{__html: mod_title }}></h2> : 
            <h1 className='module_title' dangerouslySetInnerHTML={{__html: mod_title }}></h1>
          }
        </>
    )
}