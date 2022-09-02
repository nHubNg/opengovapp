import Navbar from "../components/Navbar";

const Principle = () => {
    return (

        <>
            <div className=" h-screen bg-no-repeat">
            <Navbar />

            <h1 className="text-center mt-[5rem] py-5 font-semibold text-3xl">Our <span className="text-secondary">Principle</span></h1>
            <div className="flex justify-center justify-center bg-img3 bg-opacity-0 bg-no-repeat bg-auto bg-left  ">
                <p className="text-center w-2/3 text-black text-opacity-75 leading-10 text-3xl font-light pt-5 mt-5">
                    The Plateau State One Stop Investment Centre is Plateaus foremost Investment
                    attraction and promotion agency. <br />
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