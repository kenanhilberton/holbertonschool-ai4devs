# User Stories for TaskFlow AI

### User Story 1
As a Project Manager, I want to create a new project dashboard so that I can track all related tasks in one place.
**Acceptance Criteria**:
- User can name the project and set a deadline.
- System generates a unique dashboard URL.
- Dashboard allows adding at least 50 tasks initially.
**Priority**: MVP

### User Story 2
As a Developer, I want to see tasks prioritized by AI so that I know exactly what to work on first.
**Acceptance Criteria**:
- Tasks are sorted based on urgency and impact tags.
- AI provides a 1-sentence reason for the specific priority.
- User can toggle between AI-sort and manual sort.
**Priority**: MVP

### User Story 3
As a Team Member, I want to receive notifications for new task assignments so that I don't miss urgent work.
**Acceptance Criteria**:
- Notifications appear in real-time within the app.
- User can configure email alerts for high-priority tasks.
- Clicking the notification takes the user directly to the task.
**Priority**: High

### User Story 4
As a Manager, I want the AI to suggest task assignments based on member skills so that work is distributed efficiently.
**Acceptance Criteria**:
- System analyzes "Skills" field in user profiles.
- AI provides top 3 suggested assignees for any new task.
- Manager can accept or override the suggestion.
**Priority**: High

### User Story 5
As a Developer, I want to update task status to "In Progress" or "Done" so that the team can see my progress.
**Acceptance Criteria**:
- Status update happens with a single click or drag-and-drop.
- Update is reflected on the project manager's dashboard instantly.
- History log records the time of the status change.
**Priority**: MVP

### User Story 6
As a Stakeholder, I want to view automated weekly progress reports so that I can monitor project health without meetings.
**Acceptance Criteria**:
- Report is generated every Friday at 5:00 PM.
- Includes charts showing completed vs. pending tasks.
- Report can be exported as a PDF.
**Priority**: Medium

### User Story 7
As a Team Lead, I want to see a workload heatmap so that I can prevent team burnout.
**Acceptance Criteria**:
- Heatmap shows the number of active tasks per person.
- Overloaded members (more than 5 active tasks) are highlighted in red.
- System suggests moving tasks from red-zone members to available ones.
**Priority**: High

### User Story 8
As a User, I want to reset my password via email so that I can regain access to my account if I forget it.
**Acceptance Criteria**:
- Reset link is sent to the registered email address.
- Link expires after 30 minutes for security.
- System requires a minimum of 8 characters for the new password.
**Priority**: MVP

### User Story 9
As a Project Manager, I want to archive completed projects so that the workspace remains clean.
**Acceptance Criteria**:
- Archived projects are hidden from the main dashboard.
- Archived data is still searchable and retrievable.
- Confirmation modal appears before archiving.
**Priority**: Low

### User Story 10
As an Admin, I want to manage user roles and permissions so that data security is maintained.
**Acceptance Criteria**:
- Admin can assign "Viewer", "Editor", or "Admin" roles.
- Viewers cannot delete or edit tasks.
- Role changes take effect immediately.
**Priority**: High