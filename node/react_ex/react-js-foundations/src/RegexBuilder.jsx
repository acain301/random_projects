// import React, { useState } from 'react';

// const RegexBuilder = () => {
//   const [pattern, setPattern] = useState('');
//   const [flags, setFlags] = useState('g');
//   const [testString, setTestString] = useState('');
//   const [matches, setMatches] = useState([]);
//   const [error, setError] = useState('');

//   const handleTest = () => {
//     try {
//       const regex = new RegExp(pattern, flags);
//       const results = [...testString.matchAll(regex)];
//       setMatches(results);
//       setError('');
//     } catch (err) {
//       setMatches([]);
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800 }}>
//       <h2>🛠️ Regex Builder</h2>

//       <label>Regex Pattern:</label>
//       <input
//         type="text"
//         value={pattern}
//         onChange={(e) => setPattern(e.target.value)}
//         placeholder="e.g. \\w+"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Flags:</label>
//       <input
//         type="text"
//         value={flags}
//         onChange={(e) => setFlags(e.target.value)}
//         placeholder="g, i, m, etc."
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Test String:</label>
//       <textarea
//         value={testString}
//         onChange={(e) => setTestString(e.target.value)}
//         rows={5}
//         placeholder="Type text to test regex here"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <button onClick={handleTest} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
//         Test Regex
//       </button>

//       {error && (
//         <div style={{ color: 'red', marginTop: '1rem' }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {matches.length > 0 && (
//         <div style={{ marginTop: '1rem' }}>
//           <h4>✅ Matches:</h4>
//           <ul>
//             {matches.map((match, index) => (
//               <li key={index}>
//                 <code>{match[0]}</code> at index {match.index}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {!error && matches.length === 0 && testString && (
//         <p style={{ marginTop: '1rem' }}>No matches found.</p>
//       )}
//     </div>
//   );
// };

// export default RegexBuilder;


/////////////////////////////////////////////////




// import React, { useState, useEffect } from 'react';

// const RegexBuilder = () => {
//   const [pattern, setPattern] = useState('');
//   const [flags, setFlags] = useState('g');
//   const [testString, setTestString] = useState('');
//   const [matches, setMatches] = useState([]);
//   const [error, setError] = useState('');
//   const [explanation, setExplanation] = useState('');

//   useEffect(() => {
//     if (pattern) {
//       try {
//         const regex = new RegExp(pattern, flags);
//         const results = [...testString.matchAll(regex)];
//         setMatches(results);
//         setError('');
//         setExplanation(generateExplanation(pattern, flags));
//       } catch (err) {
//         setMatches([]);
//         setError(err.message);
//         setExplanation('');
//       }
//     } else {
//       setMatches([]);
//       setExplanation('');
//     }
//   }, [pattern, flags, testString]);

//   const generateExplanation = (pattern, flags) => {
//     // Placeholder function for generating regex explanation
//     // Implement your own explanation logic or use a library if available
//     return `Explanation for pattern: ${pattern} with flags: ${flags}`;
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800 }}>
//       <h2>🛠️ Regex Builder</h2>

//       <label>Regex Pattern:</label>
//       <input
//         type="text"
//         value={pattern}
//         onChange={(e) => setPattern(e.target.value)}
//         placeholder="e.g. \\w+"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Flags:</label>
//       <input
//         type="text"
//         value={flags}
//         onChange={(e) => setFlags(e.target.value)}
//         placeholder="g, i, m, etc."
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Test String:</label>
//       <textarea
//         value={testString}
//         onChange={(e) => setTestString(e.target.value)}
//         rows={5}
//         placeholder="Type text to test regex here"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       {error && (
//         <div style={{ color: 'red', marginTop: '1rem' }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {explanation && (
//         <div style={{ marginTop: '1rem' }}>
//           <h4>🔍 Explanation:</h4>
//           <p>{explanation}</p>
//         </div>
//       )}

//       {matches.length > 0 && (
//         <div style={{ marginTop: '1rem' }}>
//           <h4>✅ Matches:</h4>
//           <ul>
//             {matches.map((match, index) => (
//               <li key={index}>
//                 <code>{match[0]}</code> at index {match.index}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {!error && matches.length === 0 && testString && (
//         <p style={{ marginTop: '1rem' }}>No matches found.</p>
//       )}
//     </div>
//   );
// };

// export default RegexBuilder;


////////////////////



// import React, { useState, useEffect } from 'react';
// // Import the regex library
// import { regex } from 'regex';

// const RegexBuilder = () => {
//   const [pattern, setPattern] = useState('');
//   const [flags, setFlags] = useState('g');
//   const [testString, setTestString] = useState('');
//   const [matches, setMatches] = useState([]);
//   const [error, setError] = useState('');
//   const [explanation, setExplanation] = useState('');

//   useEffect(() => {
//     if (pattern) {
//       try {
//         // Use the regex library to create a regex object
//         // const re = regex(flags)(pattern);
//         const re = new RegExp(pattern, flags)
//         const results = [...testString.matchAll(re)];
//         setMatches(results);
//         setError('');
//         // Generate a human-readable explanation
//         setExplanation(generateExplanation(pattern, flags));
//       } catch (err) {
//         setMatches([]);
//         setError(err.message);
//         setExplanation('');
//       }
//     } else {
//       setMatches([]);
//       setExplanation('');
//     }
//   }, [pattern, flags, testString]);

//   const generateExplanation = (pattern, flags) => {
//     // Placeholder for generating a regex explanation
//     // Implement your own explanation logic or use a library if available
//     return `Explanation for pattern: ${pattern} with flags: ${flags}`;
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800 }}>
//       <h2>🛠️ Regex Builder</h2>

//       <label>Regex Pattern:</label>
//       <input
//         type="text"
//         value={pattern}
//         onChange={(e) => setPattern(e.target.value)}
//         placeholder="e.g. \\w+"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Flags:</label>
//       <input
//         type="text"
//         value={flags}
//         onChange={(e) => setFlags(e.target.value)}
//         placeholder="g, i, m, etc."
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       <label style={{ marginTop: '1rem' }}>Test String:</label>
//       <textarea
//         value={testString}
//         onChange={(e) => setTestString(e.target.value)}
//         rows={5}
//         placeholder="Type text to test regex here"
//         style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
//       />

//       {error && (
//         <div style={{ color: 'red', marginTop: '1rem' }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {explanation && (
//         <div style={{ marginTop: '1rem' }}>
//           <h4>🔍 Explanation:</h4>
//           <p>{explanation}</p>
//         </div>
//       )}

//       {matches.length > 0 && (
//         <div style={{ marginTop: '1rem' }}>
//           <h4>✅ Matches:</h4>
//           <ul>
//             {matches.map((match, index) => (
//               <li key={index}>
//                 <code>{match[0]}</code> at index {match.index}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {!error && matches.length === 0 && testString && (
//         <p style={{ marginTop: '1rem' }}>No matches found.</p>
//       )}
//     </div>
//   );
// };

// export default RegexBuilder;




////////////////////////


import React, { useState, useEffect } from 'react';
import { parse } from 'regexp-tree';

const RegexBuilder = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');
  const [explanation, setExplanation] = useState('');
  const [ast, setAST] = useState(null);

  useEffect(() => {
    if (pattern) {
      try {
        const re = new RegExp(pattern, flags);
        const results = [...testString.matchAll(re)];
        setMatches(results);
        setError('');

        // Parse AST
        const parsedAST = parse(`/${pattern}/${flags}`);
        setAST(parsedAST);

        // Explanation
        setExplanation(generateExplanation(parsedAST));
      } catch (err) {
        setMatches([]);
        setAST(null);
        setError(err.message);
        setExplanation('');
      }
    } else {
      setMatches([]);
      setAST(null);
      setExplanation('');
    }
  }, [pattern, flags, testString]);

  const generateExplanation = (ast) => {
    if (!ast || !ast.body) return 'Unable to generate explanation.';

    const explainNode = (node) => {
      switch (node.type) {
        case 'Character':
          return `Matches character "${node.value}"`;
        case 'CharacterClass':
          return `Character class matching one of: [${node.expressions.map(explainNode).join(', ')}]`;
        case 'CharacterClassRange':
          return `Characters from "${node.from.value}" to "${node.to.value}"`;
        case 'Repetition':
          return `${explainNode(node.expression)} repeated ${node.quantifier.kind === 'Range' 
            ? `${node.quantifier.from} to ${node.quantifier.to || '∞'} times` 
            : node.quantifier.kind}`;
        case 'Group':
          return `Group: (${explainNode(node.expression)})`;
        case 'Alternative':
          return node.expressions.map(explainNode).join(', then ');
        case 'Disjunction':
          return `Either ${explainNode(node.left)} or ${explainNode(node.right)}`;
        default:
          return node.type;
      }
    };

    return explainNode(ast.body);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800 }}>
      <h2>🛠️ Regex Builder</h2>

      <label>Regex Pattern:</label>
      <input
        type="text"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        placeholder="e.g. \\w+"
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />

      <label style={{ marginTop: '1rem' }}>Flags:</label>
      <input
        type="text"
        value={flags}
        onChange={(e) => setFlags(e.target.value)}
        placeholder="g, i, m, etc."
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />

      <label style={{ marginTop: '1rem' }}>Test String:</label>
      <textarea
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
        rows={5}
        placeholder="Type text to test regex here"
        style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
      />

      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {explanation && (
        <div style={{ marginTop: '1rem' }}>
          <h4>🔍 Explanation:</h4>
          <p>{explanation}</p>
        </div>
      )}

      {ast && (
        <div style={{ marginTop: '1rem' }}>
          <h4>🌳 Regex AST:</h4>
          <pre style={{ background: '#f4f4f4', padding: '1rem', overflowX: 'auto' }}>
            {JSON.stringify(ast.body, null, 2)}
          </pre>
        </div>
      )}

      {matches.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4>✅ Matches:</h4>
          <ul>
            {matches.map((match, index) => (
              <li key={index}>
                <code>{match[0]}</code> at index {match.index}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!error && matches.length === 0 && testString && (
        <p style={{ marginTop: '1rem' }}>No matches found.</p>
      )}
    </div>
  );
};

export default RegexBuilder;
