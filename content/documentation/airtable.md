---
title: "Working with the Airtable database"
date: 2018-12-12T09:40:06-06:00
draft: false
summary: Most of the program committee data is held in a separate Airtable database. Learn how to work with it here.

---

## Getting to the Airtable database

Log in to [Airtable](airtable.com) with WMA credentials, and select the "WMA Program Committee Data" database. You should see a spreadsheet with several tabs across the front. You will mostly be concerned with the "submissions" and "pc_members" tables.

Before you start making changes to the data, I recommend you create a backup of the database by hovering over the lower-right-hand corner of the "Wm" database icon and selecting "Duplicate base."

## Embedding the submission form on your website

To embed the submission form on your website, or to send a direct link to the form via e-mail, first select the "submissions" tab of the Airtable base. Immediately below the tab is a drop-down menu allowing you to select different views of the submission data (the default view is usually "Master List"). From here, select "WMA Program Submission" from the drop-down list (it will have a pink icon next to it).

When you select "WMA Program Submission", you should now see a pink "Share Form" button appear just below the top row of tabs. Click this button to view your options:
* __If you want to share a link to the form directly via e-mail:__ Copy the URL highlighted in pink in the resulting window.
* __If you want to embed the form on your website:__ Select "Embed this form on your website". This will open up a new window or tab in your browser. In the dark window at the top of the resulting page, copy the embed code, which should look similar to this:
`<iframe class="airtable-embed" src="https://airtable.com/embed/shrIAIujAIzTKmWM4?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>`
This is the code you will copy into your web CMS to embed the form.


## Submissions

As submissions come in through the online form, they will show up on the "submissions" tab. As an administrator, you will mostly be working with the first four fields: "round_number", "program_year", "session_id", and "assigned_to". These fields should all be blank when the proposals are initially submitted.

* __round_number__ ensures that the proposal is correctly sorted into the "[round 1](3/proposals/#round-1)" and "[round 2](/proposals/#round-2)" sections of the "[All Proposals](/proposals/)" page. These values are selected from a drop-down list, but can be copied and pasted all at once as well.
* __program_year:__ Adding the current program year to a submission in the table will trigger a process to add the submission to the website. Only add the current year to the program when you are ready to do this. As with the round number, the program year can be pasted into multiple rows of the table at once.
* __session_id:__ You will need to add the session ID manually. The Session ID  usually follows the format "WMA2021_001" for regular proposals, and "WMA2020_WK4" for workshops.
* __assigned_to:__ This is how you will assign program committee members to a proposal for review. Click in the field, press the "plus" button, and select the appropriate committee member. __You will need to add committee members to the "pc_members" table to make them appear here.__ _(See "Program Committee Members", below, for more info on this.)_

The default view of this table just shows either current year submissions or submissions with no year assigned. These will be the sessions that are added to the website. To update the "current year" for this view, select the green button with the text "2 filters". In the filter options shown, the first entry should be the program year. Change the year here to update the view.

If you need to see all submissions from both the current and previous years, select the drop-down arrow next to the "Current Year Submissions" text in the upper-left-hand corner just under the "submissions" tab. Selecting "Master List" here will display all previous submissions. To return to the current view, select "Current Year Submissions" from the same drop-down list.

## Program Committee members

To add a new program committee member, or to edit the information about an existing PC member, select the "pc_members" tab. You will need to first enter an ID for the PC member. Usually, this is just the first and last name of the person, but it can be any combination of letters and numbers, as long as it doesn't duplicate another ID in the table.

If someone has rotated off of the program committee, you will want to deselect the checkbox in the "Active" field, or they will still be selectable for assignments in the "submissions" table. If the particular person is a chair or co-chair for that year, check the "Is Chair" box.

## Session tracks, format, audience, and level

In most cases, you will not need to edit these tables, unless a new option needs to be added to the submission form. If, for instance, a new track is necessary, this track would be added to the "session_tracks" table.
