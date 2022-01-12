import React from 'react'

export default function SectionsTitle({ title, subtitle }) {
    return (
        <>
            <div className="sec-heading">
                <h1 className="sec__title text-center">
                    {title}
                </h1>
                <p className="sec__meta">{subtitle}</p>
            </div>
        </>
    )
}
