// import '@testing-library/jest-dom/extend-expect'
import { describe, expect, it, vi } from "vitest"
import { RefForm as Form } from "./RefForm"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Form Component", () => {
  it("should call onSubmit when the form is valid with the correct data", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Form onSubmit={onSubmit} />)
    const email = "test@webdevsimplified.com"
    const password = "Password123"

    await user.type(screen.getByLabelText("Email"), email)
    await user.type(screen.getByLabelText("Password"), password)
    await user.click(screen.getByText("Submit"))

    expect(screen.queryByTestId("password-error-msge")).not.toBeInTheDocument()
    expect(screen.queryByTestId("email-error-msge")).not.toBeInTheDocument()

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(onSubmit).toHaveBeenCalledWith({ email, password })
  })

  it("should show the email error when the email invalid", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Form onSubmit={onSubmit} />)
    const email = "test@test.com"
    const password = "Password123"

    await user.type(screen.getByLabelText("Email"), email)
    await user.type(screen.getByLabelText("Password"), password)
    await user.click(screen.getByText("Submit"))

    expect(screen.getByTestId("email-error-msge")).toBeInTheDocument()

    expect(onSubmit).not.toHaveBeenCalledOnce()
  })

  it("should show the password error when the password is invalid", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Form onSubmit={onSubmit} />)
    const email = "test@webdevsimplified.com"
    const password = "123"

    await user.type(screen.getByLabelText("Email"), email)
    await user.type(screen.getByLabelText("Password"), password)
    await user.click(screen.getByText("Submit"))

    expect(screen.getByTestId("password-error-msge")).toBeInTheDocument()

    expect(onSubmit).not.toHaveBeenCalledOnce()
  })
  it("should update the error message while typing after the first submit", async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Form onSubmit={onSubmit} />)
    const email = "test@webdevsimplified.com"

    const passwordInput = screen.getByLabelText("Password")

    await user.type(screen.getByLabelText("Email"), email)
    await user.type(passwordInput, "1234")
    await user.click(screen.getByText("Submit"))

    expect(screen.getByTestId("password-error-msge")).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalledOnce()

    await user.clear(passwordInput)
    await user.type(passwordInput, "Password123")

    expect(screen.queryByTestId("password-error-msge")).not.toBeInTheDocument()
  })
})
