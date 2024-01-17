import React from 'react'

function Card() {
    return (
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img
                class="w-24 h-24 rounded-full mx-auto"
                src="/sarah-dayan.jpg"
                alt=""
                width="384"
                height="512"
            />
            <div class="pt-6 space-y-4">
                <blockquote>
                    <p class="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos repellat excepturi pariatur ut totam maiores
                        inventore natus odit quas. Suscipit placeat cum
                        inventore iusto sint deleniti, at tenetur ratione unde!
                    </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        Sarah Dayan
                    </div>
                    <div>Staff Engineer, Algolia</div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card
