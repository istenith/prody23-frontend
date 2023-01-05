import React from 'react'
import '../faq.css'
import './hr.css'
const questions = [
    {
      id: 1,
      question: 'Popular Articles',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
      {
      id: 2,
      question: 'Fix problems & request removals',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
      {
      id: 3,
      question: 'Browse the web',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
        {
      id: 4,
      question: 'Search on your phone or tablet',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    
  ]
const Faq = () => {
  return (
    <div>
       <div class="faq-section">
  <header>
    <h2>FAQs</h2> 
    <p>Answers to the most frequently asked questions.</p>
    </header>
    <div class="grid">
  <hr class="sketch-rule grid__item"/>
</div>
        {questions.map(item => (
          <details>
            <summary key={item.id}>
              <h4>{item.question}</h4>
              <span class="material-symbols-outlined">&#8659;</span>
            </summary>
            <p>{item.answer}</p>
            <hr />
          </details>
          
        ))}
        
      </div>
      <div class="grid">
  <hr class="sketch-rule grid__item"/>
</div>
    </div>

  );
};

export default Faq;




