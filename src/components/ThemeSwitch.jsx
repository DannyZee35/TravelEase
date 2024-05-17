'use client'

import * as React from "react"
import { useTheme } from 'next-themes'
import { FaCircle } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosColorPalette } from "react-icons/io";

export default function ThemeSwitch() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return <div>Loading...</div>

  const themes = ['#FF7A5C', '#6A35FF', '#26CBB7']

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <i><IoIosColorPalette color={theme} size={"30px"}/></i>
      </DropdownMenuTrigger>
      <DropdownMenuContent  >
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((themeName) => (
            <DropdownMenuRadioItem
              key={themeName}
              value={themeName}
              className=" flex items-center justify-center p-2"
            >
              <FaCircle color={themeName} size={"24px"} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
