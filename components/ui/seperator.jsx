const { default: Image } = require("next/image")

const Seperator = ()=>{
    return (
        <Image className="py-8" width={340} height={40} src={"/seperator.svg"}/>
    )
}

export default Seperator;