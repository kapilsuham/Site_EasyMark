const Terminal = () => {
    return (
            <div className="mockup-code bg-base-300 m-10 text-base-content">
                <pre data-prefix="1"><code>git clone https://github.com/ [YOUR_APP_NAME]</code></pre>
                <pre data-prefix="2"><code>cd [YOUR_APP_NAME]</code></pre>
                <pre data-prefix="3"><code>npm install</code></pre>
                <pre data-prefix="4"><code>git remote remove origin</code></pre>
                <pre data-prefix="5"><code>npm run dev</code></pre>
            </div>
    )
}

export default Terminal