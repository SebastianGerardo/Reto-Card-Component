import bgTop from '../images/bg-pattern-top.svg'
import bgBottom from '../images/bg-pattern-Bottom.svg'

const BgPattern = () => {
    return (
        <section className="bg">
            <div className="img-top">
                <img src={bgTop} alt="" />
            </div>
            <div className="img-btm">
                <img src={bgBottom} alt="" />
            </div>
        </section>
    )
}

export default BgPattern