function onChange(control, oldValue, newValue, isLoading) {
  // Check if the form is still loading or if the new value is the same as the old value
  if (isLoading || newValue === oldValue) {
    return;
  }
  
  // Check if the control that triggered the onChange event is the 'impact' field
  if (control.getName() === 'impact') {
    // Create a new GlideRecord object for the 'incident' table
    var gr = new GlideRecord('incident');
    
    // Retrieve the current incident record using its sys_id
    gr.get(current.sys_id);
    
    // Set the priority of the incident to 1
    gr.priority = 1;
    
    // Update the incident record in the database
    gr.update();
  }
}