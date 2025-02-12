import SectionLayout from '../layouts/SectionLayout'
import SeeMoreLink from '../ui/SeeMoreLink'

export default function UiUx() {
  const leftContent = (
    <>
      <h2 className="text-section-heading">UI / UX Design</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
      </p>
      <SeeMoreLink />
    </>
  )

  return <SectionLayout id="uiux" leftContent={leftContent} />
}
