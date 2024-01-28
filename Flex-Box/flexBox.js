const App = React.createElement('div', { style: { width: '90%', height: '150px', backgroundColor: '#FCE5CD', display: 'flex', justifyContent: 'center', alignItems: 'center', border: "2px solid black" } },
  React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'red', margin: "1%", border: "2px solid black"  } }),
  React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'yellow', margin: "1%", border: "2px solid black"  } }),
  React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'green', margin: "1%", border: "2px solid black"  } }),
  React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'purple', margin: "1%", border: "2px solid black"  } })
);

ReactDOM.render(App, document.getElementById('root'));
