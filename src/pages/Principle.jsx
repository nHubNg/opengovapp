import Navbar from "../components/Navbar";
import background from '../assets/Group 2064 (1).png'
const Principle = () => {
    return (

        <>
            <div className=" h-screen bg-no-repeat">
            <Navbar />

            <h1 className="text-center my-5 py-5 font-semibold text-3xl">Our <span className="text-secondary">Principle</span></h1>
            <div className="flex justify-center justify-center">
                <img src={background} alt="12233" />
                <p className="text-center w-2/3 leading-9 pt-5 mt-5">
                    The Plateau State One Stop Investment Centre is Plateau’s foremost Investment
                    attraction and promotion agency.
                    “As part of our mandate, we facilitate valuable investments to stimulate economic
                    growth, unlock opportunities and employment creation. We are structured to provide
                    Investors with business Insight and necessary guidelines towards a successful Integration
                    in the Plateau Business environment, and as such we remain the first point of contact for all
                    potential Investors coming to the State.”
                </p>
            </div>

            </div>

        </>

    );
}

export default Principle;