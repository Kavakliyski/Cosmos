
import '../../styles/About_styles/Abt.scss';


interface IAbt {
    title: string;
    text1: string;
    text2: string;
    image: string;
}


function Abt({ title, text1, text2, image }: IAbt) {


    return (
        <div className="AbtWrapperRight">

            <div className="AbtTextContainer">
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>

            <div className="AbtImageContainer">
                <img src={image} style={{
                    width: '100%',
                }} />
            </div>

        </div>
    )
}

export default Abt