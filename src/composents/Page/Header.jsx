import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coursTheorique from '../data/CoursThéorique';
import ListeCommande from '../data/commande';

import '../../style/Page/Header.css';

import ModalSearch from '../autres/modalSearch';
const Header = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="app-header">
      <Container>
        <Navbar.Brand as={Link} to="/"> <i class="fa-brands fa-git-alt"></i> GitTutos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cours" id="basic-nav-dropdown">
              {coursTheorique.chapitres.map((chapitre) => (
                <NavDropdown.Item
                  key={chapitre.chapitre}
                  as={Link}
                  to={`/cours-theorique/${chapitre.chapitre}`}
                >
                  {chapitre.chapitre}: {chapitre.titre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Commande" id="basic-nav-dropdown">
              {ListeCommande.commande.map((commande) => (
                <NavDropdown.Item
                  key={commande.id}
                  as={Link}
                  to={`/pageCommande/${commande.id}`}
                >
                  {commande.nom}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <input type="button" value="Rechercher un collaborateur" id="collaboratorSearch"  onClick={() => setIsModalOpen(true)}/>
          <Button as={Link} to="/exercices-pratiques" id="Exercice">Exercice Pratique</Button>
          <Button as={Link} to={user ? "/profil" : "/auth"} id="Compte" className='ms-2'>
            {user ? user.username : "Se Connecter"}
          </Button>
        </Navbar.Collapse>
      </Container>
      
    <ModalSearch
      isOpen={isModalOpen}
      onClose={() => {
      setIsModalOpen(false);
     }}/>
    </Navbar>
  );
};

export default Header;
