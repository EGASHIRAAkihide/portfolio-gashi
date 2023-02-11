import Link from "next/link"

export const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='https://github.com/EGASHIRAAkihide' legacyBehavior>
            <a target='_blank'>
              GitHub
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}