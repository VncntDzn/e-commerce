<Drawer ref={drawerRef} anchor='left' open={toggleNavbar}>
  <IconButton
    onClick={handleNavbar}
    edge='start'
    color='inherit'
    aria-label='menu'
  >
    <MenuOpenRoundedIcon />
  </IconButton>
  <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
  <Divider />
  <h1>Accounts here</h1>
</Drawer>;
