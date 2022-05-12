import { useState } from "react";
import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import "./app.css";

function H1OrH2({ isH1, children, ...props }) {
  return isH1 ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>;
}

function Welcome({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Welcome to Accessibility Week 2022!
      </H1OrH2>
      <p>
        We will have an introduction to this year's Accessibility Week and an
        overview of the schedule. We will also have an outline of the progress
        made so far.
      </p>
    </>
  );
}

function Workshop({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Workshop
      </H1OrH2>
      <p>
        Our 2 workshops will be an opportunity for our frontend teams to learn
        more about the use of screen readers, specifically Voice Over on MacOS.
      </p>
      <p>
        We will also see in detail how to use <code>jest-axe</code> and{" "}
        <code>cypress-axe</code> in our test suites.
      </p>
      <p>
        Finally, these workshops will be an opportunity for everyone to use our
        applications using a screen reader and to understand the difficulties
        encountered by our users using these tools.
      </p>
    </>
  );
}

function AccessibleFormTalk({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Accessible Forms: It’s Not as Difficult as You Think
      </H1OrH2>
      <p>
        This talk by Maria Lamardo demonstrates how to design accessible form,
        how form element interact with assistive technologies and what technical
        aspect to take into consideration.{" "}
        <a href="https://www.deque.com/axe-con/sessions/accessible-forms-its-not-as-difficult-as-you-think/">
          Find the talk on the axe con website.
        </a>
      </p>
    </>
  );
}

function TestingWebAccessiblityTalk({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Testing Web Accessibility
      </H1OrH2>
      <p>
        This talk by Adrián Bolonio is focused around automatically testing web
        accessibility. It contains a lot of ideas on how to do that.{" "}
        <a href="https://www.deque.com/axe-con/sessions/testing-web-accessibility/">
          Find the talk on the axe con website.
        </a>
      </p>
    </>
  );
}

function ImprovingAccessibilityWithCSSTalk({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Improving Accessibility with CSS
      </H1OrH2>
      <p>
        This talk will introduce modern CSS practices to the audience. A
        departure from the way we have been writing styles for years, this new
        techniques will benefit people with different necessities.
      </p>
    </>
  );
}

function InnovationTime({ isShown }) {
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

function TestingStrategies({ isShown }) {
  return (
    <>
      <H1OrH2 isH1={isShown} id="dialog-label">
        Testing Accessiblity Strategies
      </H1OrH2>
      <p>
        We will discuss how we should use jsx-a11y, jest-axe, cypress-axe and
        lighthouse to provide the best testing safety net for our apps without
        over-testing things and wasting resources.
      </p>
    </>
  );
}

const Descriptions = {
  welcome: Welcome,
  workshop: Workshop,
  talk1: AccessibleFormTalk,
  talk2: ImprovingAccessibilityWithCSSTalk,
  talk3: TestingWebAccessiblityTalk,
  innovationtime: InnovationTime,
  testingStrategies: TestingStrategies,
};

function Cell({ children, hidden, onClick, rowspan }) {
  return (
    <td rowSpan={rowspan}>
      <button tabIndex={hidden ? -1 : 0} onClick={onClick}>
        {children}
      </button>
    </td>
  );
}

export function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [current, setCurrent] = useState(undefined);
  const open = (id) => () => {
    setCurrent(id);
    setShowDialog(true);
  };
  const close = () => setShowDialog(false);

  const Description = current ? Descriptions[current] : null;

  return (
    <div className="app">
      <div className="schedule">
        <header>
          <H1OrH2 isH1={!showDialog} id="title">
            SAS Accessibility Week 2022
          </H1OrH2>
          <p>from Monday 16th May to Friday 20th May</p>
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
              <Cell hidden={showDialog} onClick={open("welcome")}>
                Welcome
              </Cell>
              <Cell rowspan={2} hidden={showDialog} onClick={open("talk1")}>
                Talk
              </Cell>
              <Cell rowspan={2} hidden={showDialog} onClick={open("talk2")}>
                Talk
              </Cell>
              <Cell rowspan={2} hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell rowspan={2} hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">10:30 - 11:00</th>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">11:00 - 12:30</th>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("workshop")}>
                Workshop
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">13:30 - 14:30</th>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("talk3")}>
                Talk
              </Cell>
              <Cell hidden={showDialog} onClick={open("testingStrategies")}>
                Testing Strategies
              </Cell>
            </tr>
            <tr>
              <th scope="row">14:30 - 16:00</th>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("workshop")}>
                Workshop
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">16:00 - 17:30</th>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
          </tbody>
        </table>
        {Description && showDialog && (
          <Dialog
            isOpen={showDialog}
            onDismiss={close}
            aria-labelledby="dialog-label"
          >
            <main>
              <Description isShown={showDialog} />
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
