import { motion } from "framer-motion"; 
import resep1 from "../assets/puaba.png";  
import resep2 from "../assets/salad.png";
import resep3 from "../assets/jus.png";

const Masakan = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0, 
        ease: "easeInOut", 
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center"
      initial="hidden"
      animate="visible" 
      variants={containerVariants}
    >
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-primary">
          Hasil Olahan dari <span className="text-primaryDark">Strawberry</span>
        </h1>
        <p className=" mt-4 max-w-2xl mx-auto">
          Stroberi adalah buah yang luar biasa serbaguna dan dapat diolah menjadi berbagai macam hidangan lezat. Berkat rasa manis dan sedikit asamnya, stroberi bisa digunakan dalam berbagai resep, mulai dari makanan penutup hingga minuman.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {[resep1, resep2, resep3].map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={src}
                alt={`Recipe ${index + 1}`}
                className="w-40 h-40 mb-4 transition-transform duration-300 img-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -10 }}
              />
            </motion.div>
            <h2 className="text-xl font-bold">
              {index === 0 ? (
                <>
                  <span className="text-secondary">Selai</span>
                </>
              ) : index === 1 ? (
                <>
                  <span className="text-secondary">Salad</span>
                </>
              ) : (
                <>
                  <span className="text-secondary">Juice</span>
                </>
              )}
            </h2>

            <p className=" text-center mt-2 w-full">
              Stroberi ini dapat diolah menjadi berbagai hal.
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Masakan;
