import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

const BaseTest = () => {
  return <div>test</div>;
};

describe("test testing-library:render & snap test", () => {
  it("should be able to render a div", () => {
    render(<BaseTest />);

    // same as console.log
    screen.debug();

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should be able to match snapshot", () => {
    const { asFragment } = render(<BaseTest />);
    expect(asFragment()).toMatchSnapshot();
  });
});

const HandleTest = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Test Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}></button>
    </>
  );
};

describe("test testing-library: event test", async () => {
  it("should be able to click button", async () => {
    render(<HandleTest />);
    expect(screen.getByText("Test Count: 0")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Test Count: 1")).toBeInTheDocument();
  });
});

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const handler = [
  http.get("/hello", () => {
    return HttpResponse.json({ message: "hello" });
  }),
];

describe("test msw", async () => {
  const server = setupServer(...handler);

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should be able to mock http request", async () => {
    const res = await fetch("/hello");
    const data = await res.json();
    expect(data.message).toBe("hello");
    console.log(data);
  });
});
