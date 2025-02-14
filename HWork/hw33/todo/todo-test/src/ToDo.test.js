import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./ToDo";
import "@testing-library/jest-dom";

describe("TodoApp Component", () => {

  test("renders page title 'Java developer roadmap: 2025'", () => {
    render(<TodoApp />);
    expect(screen.getByText(/Java developer roadmap: 2025/i)).toBeInTheDocument();
  });

  test("text input accepts both numbers and letters", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");

    fireEvent.change(input, { target: { value: "React 123" } });

    expect(input.value).toBe("React 123");
  });

  test("does not add an item when clicking 'DELETE' without any todos", () => {
    render(<TodoApp />);
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  test("adds a new item to the list when entering text and pressing 'Enter'", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(await screen.findByText("New Todo Item")).toBeInTheDocument();
  });

  test("input field is cleared after adding a todo", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");

    fireEvent.change(input, { target: { value: "Task to clear" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(input.value).toBe("");
  });

  test("marking a todo as completed updates its checkbox state", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("completed items can be deleted", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  });

  test("clicking 'DELETE' does not remove uncompleted items", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.click(deleteButton);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  test("after adding multiple items, they all appear in the list", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "Task 3" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(await screen.findByText("Task 1")).toBeInTheDocument();
    expect(await screen.findByText("Task 2")).toBeInTheDocument();
    expect(await screen.findByText("Task 3")).toBeInTheDocument();
  });

  test("search filters only matching items", async () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add new topic ...");
    const searchInput = screen.getByPlaceholderText("Search (min length 3 char)");

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "Java" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(searchInput, { target: { value: "React" } });

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.queryByText("Java")).not.toBeInTheDocument();
  });

});
