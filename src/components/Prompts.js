import { useState } from 'react';

const Prompts = () => {
  const promptData = [
      'Write about someone who has always done something as part of a group, and is now starting to set out solo, or vice versa.',
      'Write a story about someone who has put “Blood Sweat & Tears” into getting where they are — only to question whether it was worth it.',
      'Your main character has a secret superpower; the gossip they spread always comes true.'
  ];

  const getRandomPrompt = () => {
    return promptData[Math.floor(Math.random() * promptData.length)];
  };

  const [promptTitle, setPromptTitle] = useState(getRandomPrompt());

  const handleClick = () => {
    const randomPrompt = getRandomPrompt();
    setPromptTitle(randomPrompt);
  }


  return (
    <>
      <h2>{promptTitle}</h2>
      <button onClick={handleClick}>GENERATE</button>
    </>
  );
};

export default Prompts;
