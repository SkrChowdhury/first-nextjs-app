import Counter from "@/components/Counter/Counter"
import Link from "next/link"

function HomePage() {
  // throw new Error()
  return (
    <div>
      <h1>This is Next App</h1>
      <Counter/>
      <Link href="/about">
      <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/contact">
      <button className="btn btn-info">Contact</button>
      </Link>
    </div>
  )
}

export default HomePage
