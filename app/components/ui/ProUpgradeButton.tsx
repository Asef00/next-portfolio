'use client'

export default function ProUpgradeButton() {
  const handleUpgradeClick = () => {
    const subject = 'Portfolio Pro Upgrade Request'
    const body =
      "Hi Asef,\n\nI'm interested in upgrading to the Pro version of the portfolio website. Please provide me with more information.\n\nThank you!"

    window.location.href = `mailto:asefhosseini00@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <button
      onClick={handleUpgradeClick}
      className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
    >
      Upgrade to Pro
    </button>
  )
}
