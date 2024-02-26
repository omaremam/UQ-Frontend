const StepProgress = ({ totalSteps, activeStep }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);
  return (
    <>
      <div className="flex h-1 w-full  items-center justify-center">
        {steps.map((step) => (
          <div
            key={step}
            className={`h-full w-full  ${
              step <= activeStep ? "bg-pink-800" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default StepProgress;