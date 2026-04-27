import Button from "./Button/Button";

const OptionsContainer = ({ currentAction, result, isLoading, handleOptionSelect }) => {
  if (!currentAction || result || isLoading) return null;

  return (
    <div className="options-container fade-in">
      {currentAction.options?.map((option, idx) => (
        <Button
          key={idx}
          label={option.name}
          size="m"
          onClick={() => handleOptionSelect(option)}
        />
      ))}
    </div>
  );
};

export default OptionsContainer;