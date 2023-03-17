<template>
  <div>
    <h1>Programs</h1>
    <table>
      <thead>
        <tr>
          <th>Program Name</th>
          <th>Location</th>
          <th>Period</th>
          <th>Program Description</th>
          <th>Image URL</th>
          <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="showAddModal">Add Program</button></th>
        </tr>
      </thead>
      <tbody>
        <tr class="program" v-for="program in programs" :key="program.id">
          <td>{{ program.ProgramName }}</td>
          <td>{{ program.Location }}</td>
          <td>{{ program.Period }}</td>
          <td>{{ program.ProgramDescription }}</td>
          <td><img :src="program.imgURL" /></td>
          <td>
            <button @click="showEditModal(program)">Edit</button>
            <button @click="deleteProgram(program)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Add Program Modal -->
    <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': showModal }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modalTitle }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              @click="cancelForm"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="program-name" class="form-label">Program Name:</label>
                <input id="program-name" v-model="form.ProgramName" required class="form-control" />
              </div>
              <div class="mb-3">
                <label for="location" class="form-label">Location:</label>
                <input id="location" v-model="form.Location" required class="form-control" />
              </div>
              <div class="mb-3">
                <label for="period" class="form-label">Period:</label>
                <input id="period" v-model="form.Period" required class="form-control" />
              </div>
              <div class="mb-3">
                <label for="program-description" class="form-label">Program Description:</label>
                <textarea id="program-description" v-model="form.ProgramDescription" required
                  class="form-control"></textarea>
              </div>
              <div class="mb-3">
                <label for="img-url" class="form-label">Image URL:</label>
                <input id="img-url" v-model="form.imgURL" required class="form-control" />
              </div>
              <div class="modal-footer" v-for="program in programs" :key="program.id">
                <button v-if="!editingProgram" @click="showModal()">Add</button>
                <button  @click="updateProgram(program)">Edit</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                  @click="cancelForm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    programs() {
      return this.$store.state.programs;
    }
  },
  data() {
  return {
    showModal: false,
    editingProgram: false, // new property
      modalTitle: "",
      modalAction: "",
      form: {
        ProgramName: "",
        Location: "",
        Period: "",
        ProgramDescription: "",
        imgURL: "",
      },
    };
  },
  created() {
    this.$store.dispatch("fetchPrograms");
  },
  methods: {
    showAddModal() {
      this.modalTitle = "Add Program";
      this.modalAction = "Add"; // Set the modalAction property to "Add"
      this.form = {
        ProgramName: "",
        Location: "",
        Period: "",
        ProgramDescription: "",
        imgURL: "",
      };
      this.showModal = true;
    },

    showEditModal(program) {
      this.modalTitle = "Edit Program";
      this.modalAction = "Update";
      this.form = { ...program };
      this.editingProgram = true; // set editingProgram to true when editing
      this.showModal = true;  
    },

    submitForm() {
      if (this.modalAction === "Add") {
        this.$store.dispatch("addProgram", this.form);
      } else if (this.modalAction === "Update") {
        this.$store.dispatch("updateProgram", this.form);
      }
      this.showModal = false;
      this.editingProgram = false; // set editingProgram back to false when closing modal
    },

    cancelForm() {
      this.showModal = false;
    },
    deleteProgram(program) {
      console.log(program); // Add this line
      console.log('Program: ', program.ID);
      if (confirm("Are you sure you want to delete this program?")) {
        if (program.ID) {
          this.$store.dispatch("deleteProgram", program.ID).then(() => {
            // handle success
            console.log("Program deleted successfully");
            window.location.reload();
          }).catch(err => {
            // handle error
            console.error(err);
          });
        } else {
          console.error("Invalid program ID");
        }
      }
    },
    updateProgram(program) {
      console.log('Program: ', program.ID);
      if (program.ID) {
  this.$store.dispatch("updateProgram", program.ID).then(() => {
      // handle success
      console.log("Program updated successfully");
      window.location.reload();
    })
    .catch(err => {
      // handle error
      console.error(err);
    });
  } else {
          console.error("Invalid program ID");
        }
      }
    }
    }
</script>


<style scoped>
img {
  width: 250px;
}
h1 {
  text-align: center;
  font-size: 3rem;
  color: #555;
  margin: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

th,
td {
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f8f8;
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
}

td {
  font-size: 1rem;
  color: #333;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}

.program {
  transition: all 0.2s ease;
}

.program:hover {
  background-color: #f2f2f2;
}</style>