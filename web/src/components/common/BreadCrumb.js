import React from 'react';

function SubItem({content}) {
    return content ? <li className="breadcrumb-item"><a href="#">{content}</a></li> : null;
}

function SearchContainer() {
    return (
        <div className="container">
            <form action="#" className="course-search-form">
                {/*<input type="text" name="search" id="search" className="search" placeholder="Find a course or tutorial " />*/}
                {/*<input type="submit" name="submit" id="search-submit" className="sreach-submit" />*/}
            </form>
        </div>
    );
}

function NormalContainer({title, subItem, currentItem}) {
    return (
        <div className="container">
            <h2 className="section-title">{title}</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">jishu</a></li>
                    <SubItem content={subItem}/>
                    <li className="breadcrumb-item active" aria-current="page">{currentItem || title}</li>
                </ol>
            </nav>
        </div>
    );
}

export function BreadCrumb({hasSearchBox, title, subItem, currentItem}) {
    return (
        <section className="page-name background-bg" style={{backgroundImage: 'url(../images/breadcrumb.jpg)'}}>
            <div className="overlay">
                <div className="section-padding">
                    { hasSearchBox ? <SearchContainer /> : <NormalContainer title={title} subItem={subItem} currentItem={currentItem} /> }
                </div>
            </div>
        </section>
    );
}
