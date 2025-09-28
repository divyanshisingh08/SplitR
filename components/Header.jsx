import { SignedOut,SignInButton,SignUpButton,SignedIn ,UserButton} from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div>
        <SignedOut>
              <SignInButton />
              <SignUpButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  )
}

export default Header
