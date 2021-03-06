/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

JournalEntryComponent()

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".label")


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    let entryHTMLRepresentations = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       entryHTMLRepresentations += JournalEntryComponent(entry)
        entryLog.innerHTML += `
        <article class="entryList"
        ${entryHTMLRepresentations}
        </article>
        <article class=".journalEntry">
        ${entryHTMLRepresentations}
        </article>
        
        `
    }
}

// AM-Finishing-DJ-chapter12