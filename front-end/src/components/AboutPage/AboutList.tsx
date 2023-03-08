import Image from '../../assets/moviehero.png';

import AbtRight from "./AbtRight"
import AbtLeft from "./AbtLeft";


function AboutList() {
    return (
        <div>

            <AbtRight title={'за студиото'} text1={
                'КОСМОС е независимо филмово студио, основано в София, България. Нашите основни принципи са артистичност, креативност и въздействие.  Студиото е основано през 2020-та година и е най-разпознаваемо с проектите “НЕ ПОГЛЕЖДАЙ НАГОРЕ”, “БАСКИЯ: ЧЕРНИЯТ ПИКАСО” и “ЛОТУС”.'
            } text2={
                'Главният офис на студиото се намира в кв.Овча Купел 2, София, но локацията на екипа и заснемането на кадрите за филмите ни е променлива.'
            } image={Image} />

            <AbtLeft title={'предстоящи проекти'} text1={
                'Освен предстоящите ни проект “ПРОЕКТ СИЯНИЕ”, който излиза през август, студиото има и други планове за развитие не само откъм кино.'
            } text2={
                'Идеята на КОСМОС е не просто създаване на филми, а създаване на изживяване на потребителя.За подобряването на това изживяване студиото създава нестандартен мърч, който е вдъхновен от продукцията на филмите ни.Освен това в процес на планиране е кино “КОСМОС”, където гледането на наши прожекции ще бъде на съвсем различно ниво.'
            } image={Image} />


        </div>
    )
}

export default AboutList





