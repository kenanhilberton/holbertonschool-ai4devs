# User Stories for TaskFlow AI

### User Story 1
**Role**: Passenger  
**Goal**: I want to search for nearby drivers  
**Benefit**: so that I can find a quick ride.  
**Acceptance Criteria**:
- User enters pickup and destination.
- System displays available drivers within 5 km.
- Ride can be booked in under 2 minutes.  
**Priority**: MVP

### User Story 2
**Role**: Developer  
**Goal**: I want to see tasks prioritized by AI  
**Benefit**: so that I know exactly what to work on first.  
**Acceptance Criteria**:
- Tasks are sorted based on urgency and impact tags.
- AI provides a 1-sentence reason for the specific priority.
- User can toggle between AI-sort and manual sort.  
**Priority**: MVP

### User Story 3
**Role**: Team Member  
**Goal**: I want to receive notifications for new task assignments  
**Benefit**: so that I don't miss urgent work.  
**Acceptance Criteria**:
- Notifications appear in real-time within the app.
- User can configure email alerts for high-priority tasks.
- Clicking the notification takes the user directly to the task.  
**Priority**: High

### User Story 4
**Role**: Manager  
**Goal**: I want the AI to suggest task assignments based on skills  
**Benefit**: so that work is distributed efficiently.  
**Acceptance Criteria**:
- System analyzes "Skills" field in user profiles.
- AI provides top 3 suggested assignees for any new task.
- Manager can accept or override the suggestion.  
**Priority**: High

### User Story 5
**Role**: Developer  
**Goal**: I want to update task status  
**Benefit**: so that the team can see my progress.  
**Acceptance Criteria**:
- Status update happens with a single click or drag-and-drop.
- Update is reflected on the project manager's dashboard instantly.
- History log records the time of the status change.  
**Priority**: MVP

### User Story 6
**Role**: Stakeholder  
**Goal**: I want to view automated weekly progress reports  
**Benefit**: so that I can monitor project health without meetings.  
**Acceptance Criteria**:
- Report is generated every Friday at 5:00 PM.
- Includes charts showing completed vs. pending tasks.
- Report can be exported as a PDF.  
**Priority**: Medium

### User Story 7
**Role**: Team Lead  
**Goal**: I want to see a workload heatmap  
**Benefit**: so that I can prevent team burnout.  
**Acceptance Criteria**:
- Heatmap shows the number of active tasks per person.
- Overloaded members (more than 5 tasks) are highlighted in red.
- System suggests moving tasks from red-zone members.  
**Priority**: High

### User Story 8
**Role**: User  
**Goal**: I want to reset my password via email  
**Benefit**: so that I can regain access if I forget it.  
**Acceptance Criteria**:
- Reset link is sent to the registered email address.
- Link expires after 30 minutes for security.
- System requires a minimum of 8 characters for the new password.  
**Priority**: MVP

### User Story 9
**Role**: Project Manager  
**Goal**: I want to archive completed projects  
**Benefit**: so that the workspace remains clean.  
**Acceptance Criteria**:
- Archived projects are hidden from the main dashboard.
- Archived data is still searchable and retrievable.
- Confirmation modal appears before archiving.  
**Priority**: Low

### User Story 10
**Role**: Admin  
**Goal**: I want to manage user roles and permissions  
**Benefit**: so that data security is maintained.  
**Acceptance Criteria**:
- Admin can assign "Viewer", "Editor", or "Admin" roles.
- Viewers cannot delete or edit tasks.
- Role changes take effect immediately.  
**Priority**: High