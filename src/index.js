// On importe les deux libraires principales de React (indispensables)
import React from "react";
import ReactDOM from "react-dom";
// On importe nos deux sous components créés
import Client from "./Client";
import ClientForm from "./ClientForm";
// On importe le fichier de style
import "./styles.css";

// On créé notre classe maitresse chargé d'afficher la liste des clients
class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Pernin" },
      { id: 3, nom: "Joseph Durand" }
    ]
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <Client client={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
