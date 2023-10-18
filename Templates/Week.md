---
	aliases: ["<% tp.date.weekday('YYYY.MM.DD', 1) %> – <% tp.date.now('YYYY.MM.DD', 4) %>"]
---

**Month:** [[Tracking/<% tp.date.now('YYYY.MM') %> | <% tp.date.now('MMM YYYY') %>]]

## Goals

### Quarterly deliverables

- [ ] ==TODO==

### Miscellanies & administrivia

- [ ] ==TODO==


## Details

<%
tp.user.getDaysOfWeek(tp.file.title, 'YYYY.MM.DD', 'YYYY.MM.DD')
    .map(dateString => `- [[Tracking/${dateString}|${dateString}]]: ![[Tracking/${dateString}#Outcomes|${dateString}]]`)
    .join('\n')
%>


## Outcomes

### Summary
