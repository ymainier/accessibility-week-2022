import { useState } from "react";
import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import "./App.css";

function H1OrH2({ isH1, children, ...props }) {
  return isH1 ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>;
}

function Welcome({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Welcome to the second Accessibility Week of 2022!
      </H1OrH2>
      <p>
        We will have an introduction to this end of year Accessibility Week and
        an overview of the schedule. We will also have an outline of the
        progress made so far.
      </p>
    </>
  );
}

function Product({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Product to Development Handoff
      </H1OrH2>
      <p>
        Ron is going to give a talk on how we can successfully handoff
        accessibility from product to development.
      </p>
    </>
  );
}

function HeadlessUI({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Using a Headless UI lib for Accessibility
      </H1OrH2>
      <p>
        Yann is going to give a talk on using a headless UI lib to help with
        Accessibility.
      </p>
    </>
  );
}

function AccessibilityTree({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Chrome & Firefox Accessibility Tree
      </H1OrH2>
      <p>
        Abel is going to give a talk on the Chrome & Firefox Accessibility Tree.
      </p>
    </>
  );
}

function Innovation({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Innovation Time!
      </H1OrH2>
      <p>
        During the whole week there will be time dedicated to fix accessiblity
        issues discovered during various audit, ensure a fair test coverage
        using the latest accessiblity tools and innovate around the
        accessibility of our products.
      </p>
    </>
  );
}

const Descriptions = {
  welcome: Welcome,
  talk1: Product,
  talk2: HeadlessUI,
  talk3: AccessibilityTree,
  innovation: Innovation,
};

function Cell({ children, hidden, onClick, rowspan, isTalk }) {
  return (
    <td rowSpan={rowspan} className={isTalk ? "talk" : ""}>
      <button tabIndex={hidden ? -1 : 0} onClick={onClick}>
        {children}
      </button>
    </td>
  );
}

export function App() {
  const [hidden, setHidden] = useState(false);
  const [current, setCurrent] = useState(undefined);
  const open = (id) => () => {
    setCurrent(id);
    setHidden(true);
  };
  const close = () => setHidden(false);

  const Description = current ? Descriptions[current] : null;

  return (
    <div className="app">
      <div className="schedule">
        <header>
          <H1OrH2 isH1={!hidden} id="title">
            SAS Accessibility Week 2022
          </H1OrH2>
          <p>from Monday 28th November to Friday 02nd December</p>
        </header>
        <table aria-label="Accessibility Week Schedule">
          <thead>
            <tr>
              <td className="empty"></td>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10:00 - 10:30</th>
              <Cell hidden={hidden} onClick={open("welcome")} isTalk>
                Welcome
              </Cell>
              <Cell rowspan={5} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={2} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={3} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={5} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">10:30 - 11:00</th>
              <Cell rowspan={4} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">11:00 - 11:30</th>
              <Cell hidden={hidden} onClick={open("talk2")} isTalk>
                Talk
              </Cell>
            </tr>
            <tr>
              <th scope="row">11:30 - 12:00</th>
              <Cell rowspan={2} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell hidden={hidden} onClick={open("talk3")} isTalk>
                Talk
              </Cell>
            </tr>
            <tr>
              <th scope="row">12:00 - 12:30</th>
              <Cell hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">13:30 - 14:00</th>
              <Cell hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={8} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={8} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={8} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
              <Cell rowspan={8} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">14:00 - 14:30</th>
              <Cell hidden={hidden} onClick={open("talk1")} isTalk>
                Talk
              </Cell>
            </tr>
            <tr>
              <th scope="row">14:30 - 15:00</th>
              <Cell rowspan={6} hidden={hidden} onClick={open("innovation")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">15:00 - 15:30</th>
            </tr>
            <tr>
              <th scope="row">15:30 - 16:00</th>
            </tr>
            <tr>
              <th scope="row">16:00 - 16:30</th>
            </tr>
            <tr>
              <th scope="row">16:30 - 17:00</th>
            </tr>
            <tr>
              <th scope="row">17:00 - 17:30</th>
            </tr>
          </tbody>
        </table>
        {Description && hidden && (
          <Dialog
            isOpen={hidden}
            onDismiss={close}
            aria-labelledby="dialog-label"
          >
            <main>
              <Description isShown={hidden} />
              <button className="close-button" onClick={close}>
                Close
              </button>
            </main>
          </Dialog>
        )}
      </div>
    </div>
  );
}
