import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import BtnTexts from "./BtnTexts";

function Button() {
    const [itemTransform,setItemTransForm] = useState(0);
    const [btnTransform,setBtnTransForm] = useState(0);

    const btnStyle = {
        transform:`translateX(${btnTransform}px)`
    };

    const styleFlex = {
        display:"flex",
        alignItems:"center",
    }

    const itemStyle = {
        ...styleFlex,
        transform:`translateX(-${itemTransform % BtnTexts.length * 114.5}%)`
    }

    function ItemHandler(val) {
        setItemTransForm(val);
        setBtnTransForm(10);

        setTimeout(()=> {
            setBtnTransForm(0);
        },200)
    }

    return(
        <button className="btn" style={btnStyle}>
            <span style={styleFlex}>
                {
                    BtnTexts.map(item => (
                        <span className="item"  key={item.id} style={itemStyle}>
                            {item.text}
                            <div className="chevron--wrap">
                                <BsChevronRight  onClick={()=> ItemHandler(item.id)} style={{fontSize:"25px"}} />
                            </div>
                        </span>
                    ))
                }
            </span>
        </button>
    )

}

export default Button;