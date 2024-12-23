document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  const outputDiv = document.getElementById("output");

  // Dummy file system for simulation
  const fileSystem = {
    "documents": ["resume.txt", "project.docx"],
    "downloads": ["file1.zip", "image.png"],
    "programs": ["calculator.exe", "editor.exe"],
  };

  // Simulated system info
  const systemInfo = {
    os: "Windows 95",
    architecture: "x86",
    memory: "8 GB RAM",
    processor: "Intel Core i7",
    uptime: "2 days, 3 hours",
  };

  // Function to append new output to the terminal
  function appendOutput(text) {
    const newOutput = document.createElement("div");
    newOutput.textContent = text;
    outputDiv.appendChild(newOutput);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom
  }

  // Handle basic system commands
  function handleCommand(command) {
    switch (command.toLowerCase()) {
      case "help":
        appendOutput("Available commands:\nhelp - Show this help message\nclear - Clear the terminal\nabout - Information about Kris Yotam\nls - List files in a directory\ncd <directory> - Change directory\ndir - List files in current directory\nsysinfo - Show system information\nexit - Exit the terminal\ncat <filename> - Read a file\nback - Go back to the homepage");
        break;

      case "clear":
        outputDiv.innerHTML = ""; // Clear the output
        break;

      case "about":
        appendOutput("Kris Yotam - Developer, Mathematics Student, Retro Tech Enthusiast. Learn more at krisyotam.com");
        break;

      case "exit":
        appendOutput("Exiting the terminal... Goodbye!");
        inputField.disabled = true;
        break;

      case "sysinfo":
        appendOutput(`OS: ${systemInfo.os}\nArchitecture: ${systemInfo.architecture}\nMemory: ${systemInfo.memory}\nProcessor: ${systemInfo.processor}\nUptime: ${systemInfo.uptime}`);
        break;

      case "ls":
        appendOutput("documents\ndownloads\nprograms");
        break;

      case "dir":
        appendOutput("Documents:\n  resume.txt\n  project.docx\nDownloads:\n  file1.zip\n  image.png\nPrograms:\n  calculator.exe\n  editor.exe");
        break;

      case "cat resume.txt":
        appendOutput("Resume content:\nName: Kris Yotam\nOccupation: Developer and Student\nSkills: HTML, CSS, JavaScript, Python\nExperience: Front-end development, web design");
        break;

      case "cat project.docx":
        appendOutput("Project.docx is not a text file. Use an appropriate program to open this file.");
        break;

      case "cd documents":
        appendOutput("Changed directory to 'documents'");
        break;

      case "cd downloads":
        appendOutput("Changed directory to 'downloads'");
        break;

      case "cd programs":
        appendOutput("Changed directory to 'programs'");
        break;

      case "mkdir newfolder":
        appendOutput("Directory 'newfolder' created.");
        break;

      case "rm file1.zip":
        appendOutput("Removed file 'file1.zip'.");
        break;

      case "rmdir newfolder":
        appendOutput("Removed directory 'newfolder'.");
        break;

      case "touch newfile.txt":
        appendOutput("Created new file 'newfile.txt'.");
        break;

      case "echo Hello, world!":
        appendOutput("Hello, world!");
        break;

      case "back":
        appendOutput("Redirecting to the homepage...");
        setTimeout(() => {
          window.location.href = "/index.html"; // Redirect to /index.html
        }, 1500); // Simulate a delay for user experience
        break;

      default:
        appendOutput(`'${command}' is not recognized as a command. Type 'help' for a list of commands.`);
        break;
    }
  }

  // Handle input when user presses 'Enter'
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = inputField.value.trim();
      if (command) {
        appendOutput(`C:\\> ${command}`);
        handleCommand(command);
      }
      inputField.value = ""; // Clear input field
    }
  });

  // Focus on the input field on load
  inputField.focus();
});
