// write your CatList component here
import React from 'react'

const CatList = (props) => {

    const renderCatList = () => {
        console.log("CatList component props", props)
        return props.catPics.map(pic => <img alt="" src={pic.url} />)
    }

    return (
        <div>
            {renderCatList()}
        </div>
    )
}

export default CatList;
