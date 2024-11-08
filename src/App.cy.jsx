import React from 'react'
import App from './App.jsx'
import NewHero from "./components/NewHero.jsx";
import ScrollList from "./components/ScrollList.jsx";
import HeroList from "./components/HeroList.jsx";
import NewScroll from "./components/NewScroll.jsx";

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get(".heroListLink").should('exist')
    cy.get(".scrollListLink").should('exist')
    cy.get(".newHeroLink").should('exist')
    cy.get(".newScrollLink").should('exist')
  })
})

  describe('Clicking on heroList link <HeroList/>', () => {
    it('renders the heroList component when the link is clicked', () => {
      cy.mount(<App />)
      cy.get(".heroListLink").click()
      cy.mount(<HeroList />)
    })
  })

describe('Clicking on scrollList link <ScrollList/>', () => {
  it('renders the scrollList component when the link is clicked', () => {
    cy.mount(<App />)
    cy.get(".scrollListLink").click()
    cy.mount(<ScrollList />)
  })
})

describe('Clicking on newHero link <NewHero/>', () => {
  it('renders the NewHero component when the link is clicked', () => {
    cy.mount(<App />)
    cy.get(".newHeroLink").click()
    cy.mount(<NewHero />)
    cy.get(".createNewHeroBtn").should('exist')
    cy.get(".newHeroName").should('exist')
    cy.get(".dwarvenCheckbox").should('exist')
    cy.get(".elvenCheckbox").should('exist')
    cy.get(".humanCheckbox").should('exist')
    cy.get(".orcCheckbox").should('exist')
  })
})

describe('Clicking on newScroll link <NewScroll/>', () => {
  it('renders the NewScroll component when the link is clicked', () => {
    cy.mount(<App />)
    cy.get(".newScrollLink").click()
    cy.mount(<NewScroll />)
  })
})

describe('creating new heroes in <NewHero/>', () => {
  it('add two new heroes to the heroList with the name "Sanja" that knows the orc and human languages and Qurdå with the language elven', () => {
    cy.mount(<App />)
    cy.get(".newHeroLink").click()
    cy.get(".newHeroName").type("Sanja")
    cy.get(".orcCheckbox").click()
    cy.get(".humanCheckbox").click()
    cy.get(".createNewHeroBtn").click()
    cy.get(".newHeroName").clear().type(" Qurdå ")
    cy.get(".orcCheckbox").click()
    cy.get(".humanCheckbox").click()
    cy.get(".elvenCheckbox").click()
    cy.get(".createNewHeroBtn").click()

    cy.get(".heroListLink").click()
    cy.get('h2').contains('Sanja')
    cy.get('h3').contains('orc')
    cy.get('h3').contains('human')
    cy.get('h2').contains('Qurdå')
    cy.get('h3').contains('elven')
  })
})

describe('Clicking on newScroll link <NewScroll/>', () => {
  it('renders the NewHero component when the link is clicked', () => {
    cy.mount(<App />)
    cy.get(".newScrollLink").click()
    cy.mount(<NewScroll />)
    cy.get(".createNewScrollBtn").should('exist')
    cy.get(".newScrollName").should('exist')
    cy.get(".newScrollLanguage").should('exist')
    cy.get(".newScrollContent").should('exist')

  })
})

describe('creating new scrolls in <NewScroll/> ', () => {
  it('add two new scrolls to the scrollList with the content "Valorant", one in orcish and one in elven', () => {
    cy.mount(<App />)
    cy.get(".newScrollLink").click()
    cy.get(".newScrollName").type("Orc Valorant")
    cy.get(".newScrollLanguage").select("orc")
    cy.get(".newScrollContent").type("Valorant")
    cy.get(".createNewScrollBtn").click()
    cy.get(".newScrollName").clear().type("Elvish Valorant")
    cy.get(".newScrollLanguage").select("elven")
    cy.get(".newScrollContent").clear().type("Valorant")
    cy.get(".createNewScrollBtn").click()

    cy.get(".newHeroLink").click()
    cy.get(".newHeroName").type("Bombadil")
    cy.get(".orcCheckbox").click()
    cy.get(".createNewHeroBtn").click()

    cy.get(".heroListLink").click()
    cy.get("h2").contains('Bombadil').parent().find(".chooseHeroBtn").click()

    cy.get(".scrollListLink").click()
    cy.get('h2').contains('Orc Valorant')
    cy.get('h3').contains('Wbmpsbou')
    cy.get('h2').contains('Elvish Valorant')
    cy.get('h3').contains('U`knq`ms')
    cy.get('li').contains('Elvish Valorant').parent().find('.readScrollBtn').click()
    cy.get('.scrollText').contains('U`knq`ms')
    cy.get('li').contains('Orc Valorant').parent().find('.readScrollBtn').click()
    cy.get(".scrollText").contains('Valorant')
  })
})
