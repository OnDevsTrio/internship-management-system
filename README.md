### INTERNSHIP MANAGEMENT SYSTEM

The system is responsible in handling the interns in a particular organization or company, it includes:

- Attendance Monitoring with Exportable records in Excel format.
- Task Management where a mentor or assigned intern handler can give a task to the intern/interns.
- Document Management wherein all of the required documents is stored for such requirements up to evaluation forms and others - future update.

### TECH USED

- **Frontend:** TypeScript, React.js, Next.js, Tailwind CSS, Shadcn UI
- **Backend:** MongoDB, Prisma ORM, Firebase, Auth.js

### Getting Started

Follow these instructions to set up and run the project on your local machine.

#### Prerequisites

- Node.js (v14 or later)
- npm or yarn

#### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Rusty-08/ims.git
   ```

2. **Set up environment variables:**

   Create a `.env` file in the root directory of your project and add the following environment variables:

   ```properties
   AUTH_SECRET=your_auth_secret
   DATABASE_URL=your_database_url
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_SENDER_ID=your_firebase_sender_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

   /* Optional */
   /* For Email Notifications */
   SENDER_EMAIL=the_email_sender_for_the_interns
   SENDGRID_API_KEY=your_sendgrid_api_key_or_other_library_of_your_choice
   ```

3. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Additional Information

The system has a lot of room for improvement since it was built during the learning process, so feel free to provide suggestions for enhancing it. Thank you!
