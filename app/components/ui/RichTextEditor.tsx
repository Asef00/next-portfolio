'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { useState } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write something...',
}: RichTextEditorProps) {
  const [isLinkMenuOpen, setIsLinkMenuOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [isHtmlMode, setIsHtmlMode] = useState(false)
  const [htmlContent, setHtmlContent] = useState(value)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html)
      setHtmlContent(html)
    },
  })

  if (!editor) {
    return null
  }

  const addImage = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      try {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error('Failed to upload image')
        }

        const data = await response.json()
        if (data.success) {
          const imageUrl = `/uploads/${file.name}`
          editor.chain().focus().setImage({ src: imageUrl }).run()
        }
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }

    input.click()
  }

  const setLink = () => {
    if (linkUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkUrl })
        .run()
      setLinkUrl('')
      setIsLinkMenuOpen(false)
    }
  }

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(e.target.value)
    onChange(e.target.value)
  }

  const toggleHtmlMode = () => {
    if (isHtmlMode) {
      // Switching from HTML to rich text
      editor.commands.setContent(htmlContent)
    } else {
      // Switching from rich text to HTML
      setHtmlContent(editor.getHTML())
    }
    setIsHtmlMode(!isHtmlMode)
  }

  return (
    <div className="border border-gray-700 rounded-md overflow-hidden">
      <div className="bg-gray-800 p-2 flex flex-wrap gap-1">
        {/* Bold Text Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor.isActive('bold') ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.613A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z" />
          </svg>
        </button>

        {/* Italic Text Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${
            editor.isActive('italic') ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Italic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z" />
          </svg>
        </button>

        {/* Heading 2 Button */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 rounded flex items-center ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Heading 2"
        >
          H2
        </button>

        {/* Heading 3 Button */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-2 rounded flex items-center ${
            editor.isActive('heading', { level: 3 })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Heading 3"
        >
          H3
        </button>

        {/* Divider for alignment buttons */}
        <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>

        {/* Align Left Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'left' })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Align Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
          </svg>
        </button>

        {/* Align Center Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'center' })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Align Center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M3 4h18v2H3V4zm4 15h10v2H7v-2zm-4-5h18v2H3v-2zm4-5h10v2H7V9z" />
          </svg>
        </button>

        {/* Align Right Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'right' })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Align Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M3 4h18v2H3V4zm7 15h11v2H10v-2zm-7-5h18v2H3v-2zm7-5h11v2H10V9z" />
          </svg>
        </button>

        {/* Justify Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'justify' })
              ? 'bg-gray-700'
              : 'hover:bg-gray-700'
          }`}
          title="Justify"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
          </svg>
        </button>

        {/* Divider for list buttons */}
        <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>

        {/* Bullet List Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${
            editor.isActive('bulletList') ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Bullet List"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M8 4h13v2H8V4ZM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM8 11h13v2H8v-2Zm0 7h13v2H8v-2Z" />
          </svg>
        </button>

        {/* Numbered List Button */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded ${
            editor.isActive('orderedList') ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Numbered List"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M8 4h13v2H8V4ZM5 3v3h1v1H3V6h1V4H3V3h2Zm-2 9v-1h3v4H3v-1h2v-.5H4v-1h1V12H3Zm2 5.5H3v1h2v.5H3v1h3v-4H3v1h2v.5ZM8 11h13v2H8v-2Zm0 7h13v2H8v-2Z" />
          </svg>
        </button>

        {/* Divider for link/image buttons */}
        <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>

        {/* Link Button */}
        <button
          type="button"
          onClick={() => setIsLinkMenuOpen(!isLinkMenuOpen)}
          className={`p-2 rounded ${
            editor.isActive('link') ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Insert Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
          </svg>
        </button>

        {/* Image Button */}
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-700"
          title="Insert Image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
        </button>

        {/* HTML Toggle Button */}
        <div className="w-px h-6 bg-gray-700 mx-1 self-center"></div>
        <button
          type="button"
          onClick={toggleHtmlMode}
          className={`p-2 rounded ${
            isHtmlMode ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          title="Toggle HTML Mode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
          </svg>
        </button>
      </div>

      {/* Link URL Input Field */}
      {isLinkMenuOpen && (
        <div className="bg-gray-800 p-2 flex">
          <input
            type="text"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-grow bg-gray-700 text-white px-2 py-1 rounded-l"
          />
          <button
            type="button"
            onClick={setLink}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-r"
          >
            Set Link
          </button>
        </div>
      )}

      {/* Editor Content Area */}
      {isHtmlMode ? (
        <textarea
          value={htmlContent}
          onChange={handleHtmlChange}
          className="w-full h-[200px] bg-gray-900 text-white p-4 font-mono text-sm resize-none focus:outline-none"
          placeholder="Write HTML here..."
        />
      ) : (
        <EditorContent
          editor={editor}
          className="prose prose-invert max-w-none p-4 min-h-[200px] bg-gray-900 text-white"
        />
      )}
    </div>
  )
}
