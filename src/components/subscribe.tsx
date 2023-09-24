const Subscribe = () => {
  return (
    <div className="relative overflow-hidden p-10">
      <h1 className="text-3xl font-bold text-center">
        Our Treatments in Chennai
        <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-6 py-10">
          <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
            <p>Arthritis</p>
            <p>Allergic</p>
            <p>Anxiety Disorder</p>
            <p>Backpain</p>
            <p>Allergic Conjctivities</p>
          </div>

          <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
            <p>Hair Loss</p>
            <p>Infertility</p>
            <p>Goitre</p>
            <p>Insomnia</p>
            <p>Migraine</p>
          </div>

          <div className="treatmentsbox flex flex-col items-center justify-center p-8 text-sm md:text-lg   font-medium border-2 border-gray-100 bg-slate-100 rounded-2xl gap-4 shadow-sm shadow-gray-200">
            <p>Thyroid</p>
            <p>Tonsillitis</p>
            <p>Tennis Elbow</p>
            <p>Uterine Fibroids</p>
            <p>Dandruff </p>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Subscribe;
