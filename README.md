# NJDEP-Environmental-Report
A form application that collects project data

Problem:
When we (permit writers) get a new file, it can be helpful to make note of special/specific conditions associated with the proposed project. Many bureaus in Land Use have a guidance form they fill-out, which is helpful in identifying what parts of the administrative code applies to the proposed project, what items the NJAC to include in a Permit, Rejection Letter, etc. This is time and labor-intensive. Deadlines during peak season puts a strain on staff. I believe much of this work can be done by software. 

Summary:
The first goal of my programming project aims to provide a comprehensive “guidance form” that, once submitted/processed, identifies the parts of the NJAC that are/may be applicable, and places those conditions in a Word document for review by the permit writer. This is similar to what we are doing in NJEMS when we create a new document, but my software will include the conditions that apply specifically to that particular DLUR application. 

This is only the first iteration of the application. I have several other updates planned in subsequent versions of this software, to include:

•	Automatic notification and the ability to edit/add-to the “guidance form” by other users, such as SHPO, Tidelands, Pinelands, T&E, etc. 
•	New file and file update notifications via email (with clickable links in the emails to the file application)
•	Automatic updates of special conditions in the final permit, as they are updated by other users (e.g., SHPO, T&E, etc.)
•	Electronic signatures and stamp certifications/verifications
•	Reference tools to allow look-up of previous permits via auto-populated tags (similar to NJEMS Activity Tracking, but more powerful)

Eventually, these features will all be automated by a final version that: 
•	allows an Applicant to create a login on a portal, 
•	allows the Applicant to select their relevant application type(s)
•	allows the Applicant to pay their associated fee(s)
•	allows the applicant/representative/consultant to electronically upload all required application file data (plans will have electronic seal and signature capabilities)
•	once the Applicant enters their Block and Lot, and the software will 
•	access GIS, pull all the data from that block and lot, 
•	generate the “guidance form,” 
•	notify all relevant Bureaus (e.g., T&E, SHPO, etc.), requesting their comments, while it pulls the relevant data from their databases, and includes those Bureaus’ data/comments, 
•	gathers field site data from the mobile app (**see paragraph below)
•	drafts the final permit, rejection letter, etc. for review by the permit writer. 
•	Alerts the permit writer of any missing data or exceptions (e.g., if GIS has a mapped coastal wetland, but doesn’t give you the map number)
•	Allows the permit writer to manually edit the document, as needed
•	allows electronic signature when the permit writer verifies the information in the permit document
•	automatically forwards to the Supervisor for review and electronic signature (or sent back to the permit writer for revisions)
•	stores the signed permit in NJDEP database for later recall, retrieval, or reference, 
•	displays non-proprietary data (e.g., a copy of the plans, permit, etc.) to the Applicant, via the Portal
•	reminds Permittees when the renewal/expiration date(s) approaches 

**There will also be a mobile application that replaces the Munsell Soil books we use in the field, which will allow users to photograph a soil sample, and it will be digitally analyzed, and stored for reference, along with all the information in the site-visit worksheets we are supposed to fill-out (that includes the conditions on the day of the visit). Selections made in the Munsell mobile app will auto-populate conditions in the final permit, like the Applicant Portal.  
