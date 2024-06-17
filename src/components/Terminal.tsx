import React from 'react'

const Terminal = () => {
    return (
        <div>
            <div className="mockup-code bg-base-300">
                <pre data-prefix="1"><code>git clone https://github.com/ [YOUR_APP_NAME]</code></pre>
                <pre data-prefix="2"><code>cd [YOUR_APP_NAME]</code></pre>
                <pre data-prefix="3"><code>bun install</code></pre>
                <pre data-prefix="4"><code>git remote remove origin</code></pre>
                <pre data-prefix="5"><code>bun run dev</code></pre>
            </div>
        </div>
    )
}

export default Terminal