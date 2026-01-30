import React from 'react'

const checkbox = () => {
    const [isChecked, setIsChecked] = useState({
        'html': false,
        'css': false,
        'js': false,
    })
    function handleCheckBox(obj) {
        console.log(obj);
        const key = obj.target.name;
        setIsChecked({ ...isChecked, [key]: obj.target.checked })
    }
    const allChecked = Object.values(isChecked).every(Boolean);
    return (
        <>
            <label htmlFor="html">
                HTML
                <input type="checkbox" name='html' checked={isChecked.html} id="html" onChange={handleCheckBox} />
            </label>
            <label htmlFor="css">
                CSS
                <input type="checkbox" name='css' checked={isChecked.css} id="css" onChange={handleCheckBox} />
            </label>
            <label htmlFor="js">
                JS
                <input type="checkbox" name='js' checked={isChecked.js} id="js" onChange={handleCheckBox} />
            </label>
            <label htmlFor="selectAll">
                selectAll
                <input type="checkbox" name='selectAll' checked={allChecked} id="selectAll" onChange={(obj) => {
                    setIsChecked({
                        html: obj.target.checked,
                        css: obj.target.checked,
                        js: obj.target.checked,
                    })

                }} />
            </label>
        </>
    )
}

export default checkbox
