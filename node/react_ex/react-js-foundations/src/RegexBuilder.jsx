import React, { useState } from 'react';

const RegexBuilder = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  const handleTest = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const results = [...testString.matchAll(regex)];
      setMatches(results);
      setError('');
    } catch (err) {
      setMatches([]);
      setError(err.message);
    }
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

      <button onClick={handleTest} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Test Regex
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <strong>Error:</strong> {error}
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
