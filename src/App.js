import { useState } from "react";
import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import "./app.css";

const data = {
  keynote: {
    title: "Keynote",
    description: "Accessibility Week 2022 keynote by …",
  },
  workshop: {
    title: "Workshop",
    description: "Learning about Accessibility Tooling, like axe and VoiceOver",
  },
  talk1: {
    title: "First Talk",
    description: "Our first talk will be about something interesting",
  },
  talk2: {
    title: "Second Talk",
    description: "Our second talk will also be about something interesting",
  },
  talk3: {
    title: "Last Talk",
    description:
      "Our last talk will also be about something interesting but it will be the last one",
  },
  innovationtime: {
    title: "Innovation Time",
    description:
      "During the whole week there will be time dedicated to fix accessiblity issues discovered during various audit, ensure a fair test coverage using the latest accessiblity tools and innovate around the accessibility of our products.",
  },
};

function Cell({ children, hidden, onClick }) {
  return (
    <td>
      <button tabIndex={hidden ? -1 : 0} onClick={onClick}>
        {children}
      </button>
    </td>
  );
}

function MainOrAside({ isMain, children, ...props }) {
  return isMain ? (
    <main {...props}>{children}</main>
  ) : (
    <aside {...props}>{children}</aside>
  );
}

function H1OrH2({ isH1, children, ...props }) {
  return isH1 ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>;
}

export function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [current, setCurrent] = useState(undefined);
  const open = (id) => () => {
    setCurrent(id);
    setShowDialog(true);
  };
  const close = () => setShowDialog(false);

  return (
    <div className="app">
      <MainOrAside isMain={!showDialog} className="schedule">
        <header>
          <H1OrH2 isH1={!showDialog} id="title">
            Accessibility Week 2022
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
              <th scope="row">10:00 - 11:00</th>
              <Cell hidden={showDialog} onClick={open("keynote")}>
                Keynote
              </Cell>
              <Cell hidden={showDialog} onClick={open("talk1")}>
                Talk
              </Cell>
              <Cell hidden={showDialog} onClick={open("talk2")}>
                Talk
              </Cell>
              <Cell hidden={showDialog} onClick={open("talk3")}>
                Talk
              </Cell>
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
              <Cell hidden={showDialog} onClick={open("workshop")}>
                Workshop
              </Cell>
              <Cell hidden={showDialog} onClick={open("innovationtime")}>
                Innovation time
              </Cell>
            </tr>
            <tr>
              <th scope="row">13:30 - 17:30</th>
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
      </MainOrAside>
      {current && data[current] && (
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          aria-labelledby="dialog-label"
        >
          <MainOrAside isMain={showDialog}>
            <H1OrH2 isH1={showDialog} className="title" id="dialog-label">
              {data[current].title}
            </H1OrH2>
            <p
              dangerouslySetInnerHTML={{ __html: data[current].description }}
            />
            <button className="close-button" onClick={close}>
              Close
            </button>
          </MainOrAside>
        </Dialog>
      )}
    </div>
  );
}
