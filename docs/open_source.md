# gfpop Time-Dependent Constraints Project

## Overview

This project extends the gfpop package to support time-dependent constraints in changepoint detection models. The implementation allows constraints to vary over time, enabling implementations like Labeled Optimal Partitioning and unconstrained optimal partitioning.

## Project Structure

- `easy_test/` - Implementation of the Easy Test (visualizing gfpop graphs)
  - `plotModel.R` - Main function for graph visualization
  - `test_plotModel.R` - Examples showing how to use plotModel
  - `simple_gfpop_example.R` - Beginner-friendly example script
  - `README.md` - Instructions specific to the easy test
- `problem.md` - Original problem statement and tests description

## Completed Tests

### Easy Test ✅

We've implemented a solution for the easy test:

```
Write an R function `plotModel` which takes a `gfpop::graph` as above and draws a matrix of nodes (one row for each state, one column for each rule) and edges.
```

Our implementation visualizes gfpop graphs as a matrix with:
- Each **row** representing a state
- Each **column** representing a rule ID
- Nodes at each state/rule intersection
- Directed edges showing valid transitions

## Environment Setup

### Prerequisites

- R (version 3.6.0 or higher)
- Rtools (for Windows users building packages from source)

### Installing Required Packages

Run these commands in an R console:

```r
install.packages("igraph")     # For graph visualization
install.packages("remotes")    # For installing packages from GitHub
remotes::install_github("vrunge/gfpop")  # Install gfpop from GitHub
```

### Setting Up a Reproducible Environment with renv

For a fully reproducible environment, we use renv:

1. **Start an R Console**: Open RStudio or VS Code with R extension

2. **Install renv**:
   ```r
   install.packages("renv")
   ```

3. **Navigate to the project directory**:
   ```r
   setwd("path/to/gfpop-time-dependent-constraints")
   ```

4. **Initialize the environment**:
   ```r
   renv::init()
   ```

5. **Install required packages in the isolated environment**:
   ```r
   renv::install("igraph")
   renv::install("remotes")
   remotes::install_github("vrunge/gfpop")
   
   # For testing
   renv::install("testthat")
   ```
<<<<<<< HEAD

6. **Save the environment state**:
   ```r
   renv::snapshot()
=======
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/Transcendental-Programmer/gfpop-time-dependent-constraints.git
>>>>>>> 7eb01425ac58e93e3e3d2978611808a48225b131
   ```

7. **When returning to the project later**:
   ```r
   renv::restore()  # Reinstall all packages from the lockfile
   ```

## Running Tests

We use testthat for testing the implementation:

### Running Easy Test Visually

1. **Navigate to the easy_test directory**:
   ```r
   setwd("path/to/gfpop-time-dependent-constraints/easy_test")
   ```

2. **Run the example script**:
   ```r
   source("test_plotModel.R")
   ```

3. **What you'll observe**: Three graph visualizations will appear:
   - Simple Graph Example (2 states, 2 rules)
   - LOPART Graph Example (complex graph with multiple transitions)
   - Complex Graph Example (up/down states with multiple rules)

4. **For a simpler example**:
   ```r
   source("simple_gfpop_example.R")
   ```


## Implementation Approach

### Easy Test Solution

The `plotModel` function visualizes gfpop graphs using these steps:

1. Extract unique states and rules from the graph
2. Create a matrix layout with states as rows and rules as columns
3. Build an igraph object with nodes at each state/rule intersection
4. Add edges according to the transitions defined in the graph
5. Render the visualization with igraph's plotting functions

### File Overview

- `easy_test/plotModel.R`: Contains the main `plotModel` function implementation
- `easy_test/test_plotModel.R`: Demonstrates usage with multiple example graphs
- `easy_test/simple_gfpop_example.R`: A beginner-friendly example that works with any gfpop version

## Usage Examples

```r
library(gfpop)
library(igraph)

# Source the plotModel function
source("easy_test/plotModel.R")

# Create a graph (using the approach that works with all gfpop versions)
g <- list()
g$edges <- data.frame(
  state1 = c("normal", "normal", "noChange", "noChange"),
  state2 = c("normal", "noChange", "noChange", "normal"),
  type = c("null", "std", "null", "null"),
  penalty = c(0, 5.5, 0, 0),
  rule = c(1, 2, 2, 3),
  stringsAsFactors = FALSE
)
class(g) <- "graph"

# Visualize the graph
plotModel(g, title="Example Graph")
```

## Contributors

- [Priyansh Saxena](https://github.com/Transcendental-Programmer) - Implemented the Easy Test solution

## Mentors

- Primary: [Vincent Runge](https://github.com/vrunge) - vincent.runge@univ-evry.fr
- Co-Mentor: [Toby Dylan Hocking](https://github.com/tdhock) - tdhock5@gmail.com

## License

<<<<<<< HEAD
This project is licensed under the terms of the R license.
=======
For distribution details, run in an R session:
```r
license()
```

## Acknowledgements

This work extends established changepoint detection methods by incorporating time-sensitive constraints, with contributions from both the gfpop community and the broader changepoint research community.

>>>>>>> 7eb01425ac58e93e3e3d2978611808a48225b131


# GFPOP Open Source Contribution

This repository contains contributions to the GFPOP project, enhancing its functionality by introducing support for a new `rule` parameter. This parameter brings additional control for time-dependent constraints in the graph construction, ensuring greater flexibility and precision in change-point analysis.

## Key Enhancements

- **Edge Function Update:**  
  The `Edge()` function now accepts an additional parameter `rule` (default value set to 1) that serves as an identifier for time-dependent constraints. Validation checks ensure the rule is a positive integer.

- **Vectorized Support:**  
  The changes support vectorized inputs for the `rule` parameter, allowing users to provide multiple edges with different rule values efficiently.

- **Integration with Node and StartEnd:**  
  Both the `Node()` and `StartEnd()` functions have been updated to include the `rule` column, preserving consistent graph construction throughout the package.

- **Graph Construction:**  
  The `graph()` function has been modified to combine and preserve edges with different rules, especially when auto-generating null edges using the `all.null.edges` parameter. This ensures that the original rule values from user-defined edges are retained.

- **Test Coverage:**  
  Comprehensive tests have been added (see `tests/testthat/test-edge-rule.R`) to ensure:
  - Default and custom rule values are correctly assigned in edges.
  - Vectorized inputs behave as expected.
  - Errors are raised for invalid rule values (non-numeric, negative, or non-integer values).
  - Consistent integration of rule values across `Edge()`, `StartEnd()`, `Node()`, and predefined graph types.
  - Auto-generated null edges assigned a default rule of 1 do not override the user-specified values.

## Impact and Future Work

These contributions enhance the flexibility of the GFPOP package by allowing users to define custom rules for state transitions and constraints, which is especially useful for time-dependent analysis scenarios. The improved testing framework ensures the robustness of these features, aligning with the project's commitment to reliability and backward compatibility.

Future enhancements may focus on further refining graph ordering and exploration functions, as well as extending the interface for more complex graph configurations.

## How to Use

1. **Setup:**  
   Ensure that you have the latest version of the GFPOP package and its dependencies installed.

2. **Define Edges:**  
   Use the updated `Edge()` function to create edges with a custom rule:
   ```r
   library(gfpop)
   e <- Edge("A", "B", rule = 2)
   ```

3. **Create Graphs:**  
   Construct graphs combining edges, start/end nodes, and null edges:
   ```r
   g <- graph(
     Edge("A", "B", "up", rule = 2),
     Edge("B", "C", "down", rule = 3),
     Edge("C", "A", "std", rule = 4),
     StartEnd(start = "A", end = "C")
   )
   ```

4. **Testing:**  
   Run the tests to verify all edge cases are handled correctly:
   ```r
   devtools::test()
   ```

## Contributing

We welcome contributions to further improve the GFPOP package. Feel free to submit issues or pull requests describing any enhancements or bug fixes.

---

Thank you for checking out this contribution to GFPOP. Enjoy crafting innovative solutions for change-point detection and time-dependent constraints!


# PeakSegOptimal - Medium Test Branch

This branch implements rigorous testing for the unconstrained optimal partitioning algorithm with Poisson loss, focusing on challenging edge cases and numerical stability.

## Environment Setup

### Setting Up with renv

1. Clone the repository and checkout the master branch:
   ```bash
   git clone https://github.com/Transcendental-Programmer/PeakSegOptimal.git
   cd PeakSegOptimal
   git checkout master
   ```

2. Initialize the renv environment:
   ```r
   install.packages("renv")
   renv::init()
   ```

3. Install required packages:
   ```r
   renv::install("devtools")
   renv::install("testthat")
   renv::install("data.table")
   renv::install("ggplot2")
   ```

### Installing the Package

Build and install the package from source:

```r
devtools::build()
devtools::install()
```

Verify the installation was successful:

```r
library(PeakSegOptimal)
```

## Running Tests

Follow these steps to run the tests and examine the results:

1. **Run all tests**: This will execute all test files including the hard tests.
   ```r
   library(testthat)
   test_dir("tests/testthat")
   ```
   You should see test results showing passed, failed, and skipped tests.

2. **Run specific unconstrained segmentation tests**:
   ```r
   test_file("tests/testthat/test-PeakSegUnconstrainedLog.R")
   ```
   This will show detailed results for just the unconstrained tests.

3. **Test specific edge cases**: If you want to focus on particular edge cases:
   ```r
   test_file("tests/testthat/test-PeakSegUnconstrainedLog.R", filter="edge cases")
   ```
   This will only run tests with "edge cases" in their description.

4. **Benchmark performance**:
   ```r
   source("tests/benchmark.R")
   ```
   This will generate performance comparison plots and print metrics.

5. **Model selection comparison**:
   ```r
   source("model-selection-compare.R")
   ```
   This will compare model selection behavior across different penalty values.

## Output Files and Results

When running the tests and benchmark scripts, you'll find outputs in these locations:

1. **Test Results**: When using `test_dir()` or `test_file()`, test results are displayed in the R console. Detailed test logs can be found in:
   ```
   tests/testthat/test-results/
   ```

2. **Benchmark Results**: Running the benchmark script generates visualizations saved at:
   ```
   tests/benchmark-results/timing-comparison.pdf
   tests/benchmark-results/segmentation-comparison.pdf
   ```

3. **Model Selection Outputs**: The model selection script saves plots and data to:
   ```
   model-selection-results/model-comparison-plot.pdf
   model-selection-results/segment-counts.csv
   ```

4. **Function Examples**: Example outputs from the included example functions are displayed in the R console and can be saved to your working directory by assigning the plot outputs.

## Approach

The hard_test branch extends the unconstrained optimal partitioning algorithm with:

1. **Robust dynamic programming**: The implementation uses a more numerically stable approach to backtracking that handles cases where conventional dynamic programming might fail.

2. **Edge case handling**: Special cases that could cause numerical issues (like zero counts, constant values, or extreme penalties) are explicitly handled.

3. **Comprehensive testing**: Tests include challenging scenarios that stress the numerical stability of the segmentation algorithms.

4. **Performance validation**: Benchmarks ensure the unconstrained solver performs as expected even in difficult cases.

The core algorithm still uses dynamic programming with O(n²) time complexity, but with improved numerical stability.

## Implementation for Medium Test Problem

### Medium Test Challenge
The Segmentor3IsBack package implements the segment neighborhood model (best models in 1,...,K segments) for the Poisson loss and no constraints, but there is no implementation available for the optimal partitioning model (best K-segment model for a single penalty parameter, without computing the models with 1,...,K-1 segments). The goal of this test is to modify the code in the `PeakSegOptimal` package, in order to implement a solver for the optimal partitioning problem with Poisson loss and no constraints. Begin by studying [PeakSegFPOPLog.cpp](https://github.com/tdhock/coseg/blob/master/src/PeakSegFPOPLog.cpp) which implements the optimal partitioning model for the Poisson loss and the up-down constraints. There are two states in this model, up and down.  Since the up-down constrained solver has two states, there are N x 2 optimal cost functions to compute (`cost_model_mat` is of dimension `data_count*2`). The cost of being in the up state at `data_i` is `cost_model_mat[data_i]` and the cost of being in the down state is `cost_model_mat[data_i+data_count]`. The `min_prev_cost.set_to_min_less_of(down_cost_prev)` method enforces a non-decreasing constraint between adjacent segment means, for the state change down->up. Analogously, the `PiecewisePoissonLossLog::set_to_min_more_of` method enforces a non-increasing constraint for the state change up->down. To implement the unconstrained solver, you just need to implement a new `PiecewisePoissonLossLog::set_to_unconstrained_min_of` method that computes the minimum constant cost function (one `PoissonLossPieceLog` object), and then uses that to compute the N x 1 array of optimal cost functions (`cost_model_mat`). Read about the FPOP algorithm in [Maidstone et al 2016](http://link.springer.com/article/10.1007/s11222-016-9636-3?wt_mc%3Dinternal.event.1.SEM.ArticleAuthorOnlineFirst) for more info. When you are done with your implementation, check your work by comparing with the output of `Segmentor3IsBack::Segmentor(model=1)`. Perform model selection yourself for a range of penalty parameters. Using `testthat`, write some test cases which make sure your function gives the same exact model as the corresponding selected Segmentor model.

### File-by-File Solution Implementation

Our implementation solves the medium test problem across several files:

- **src/funPieceListLog.cpp/h**: 
  - Added the key method `set_to_unconstrained_min_of()` which computes the minimum constant cost function (one `PoissonLossPieceLog` object)
  - This is the core method that removes the constraints between segment means

- **src/PeakSegUnconstrainedLog.cpp**:
  - Implements the dynamic programming algorithm for the optimal partitioning problem with no constraints
  - Uses cumulative sums and backtracking to efficiently compute and decode segments
  - Handles special cases (high/low penalties, constant values) for numerical stability
  - Differs from constrained version by using a simpler O(n²) algorithm with single N x 1 cost array

- **src/interface.cpp**:
  - Added `PeakSegUnconstrainedLog_interface` to connect the C++ implementation with R
  - Provides error handling consistent with other functions in the package

- **R/PeakSegUnconstrainedLog.R**:
  - User-friendly R interface to the C++ implementation
  - Provides proper data validation and conversion between R and C++ data structures
  - Also includes a genomic data interface (`PeakSegUnconstrainedChrom`)

- **tests/testthat/test-PeakSegUnconstrainedLog.R**:
  - Tests basic functionality, edge cases, and weighted loss
  - Crucially compares unconstrained to constrained models to verify the unconstrained version produces equal or lower cost
  - Verifies that consecutive up-up or down-down changes are possible in the unconstrained model

- **model-selection-compare.R and tests/benchmark.R**:
  - Implements model selection across penalty values
  - Benchmarks performance comparing constrained vs. unconstrained algorithms
  - Generates visualizations of results for documentation and analysis

## File Changes

### Core Implementation

- **src/PeakSegUnconstrainedLog.cpp**: 
  - New implementation of the unconstrained optimal partitioning algorithm
  - Handles special cases for extreme penalty values and numerical stability
  - Implements efficient backtracking for segment reconstruction

- **src/funPieceListLog.cpp/h**:
  - Added `set_to_unconstrained_min_of()` method for computing constant pieces
  - Enhanced root-finding and numerical stability

- **src/interface.cpp**:
  - Added `PeakSegUnconstrainedLog_interface` for R integration
  - Error handling for edge cases

### R Interface

- **R/PeakSegUnconstrainedLog.R**:
  - User-facing functions for unconstrained segmentation
  - Implementation of `PeakSegUnconstrainedLog()` and `PeakSegUnconstrainedChrom()`
  - Proper conversion between C++ and R data structures

### Tests and Benchmarks

- **tests/testthat/test-PeakSegUnconstrainedLog.R**:
  - Comprehensive edge case testing
  - Comparison with constrained models
  - Validation of mathematical properties

- **tests/benchmark.R**:
  - Performance comparison between constrained and unconstrained algorithms
  - Tests across different data sizes

- **model-selection-compare.R**:
  - Assessment of model selection behavior with different penalty values

### Documentation

- **man/PeakSegUnconstrainedLog.Rd**:
  - Complete documentation of the new functions
  - Examples showing typical usage

## Contributing

For contributing to this branch:

1. Run the test suite to ensure stability: `devtools::test()`
2. Add new edge cases to the relevant test files
3. Document any numerical issues encountered

## License

This project is licensed under GPL-3 - see the LICENSE file for details.

## Acknowledgements

Based on the algorithms described in Maidstone et al. (2016) "On optimal multiple changepoint algorithms for large data".


# PeakSegOptimal

This package implements optimal segmentation algorithms subject to constraints, including the new isotonic regression with normal loss.

## Environment Setup

### Prerequisites

- R (version 4.0.0 or later)
- C++ compiler (compatible with R)

### Installation

#### Using renv (recommended)

This project uses `renv` for reproducible environment management:

```r
# Install renv if not already installed
if (!requireNamespace("renv", quietly = TRUE)) {
  install.packages("renv")
}

# Initialize renv and restore dependencies
renv::init()
renv::restore()
```

#### Manual Installation

If you prefer not to use renv, you can install the required packages manually:

```r
install.packages(c("devtools", "testthat", "penaltyLearning", "ggplot2", "data.table"))
```

#### Installing the Development Version

To install the development version from this branch:

```r
devtools::install_github("tdhock/PeakSegOptimal", ref = "master")
```

Or from your local clone:

```r
devtools::install()
```

## Running Tests

### Testing the Isotonic Regression Implementation

Run the complete test suite:

```r
devtools::test()
```

Run only the isotonic regression tests:

```r
devtools::test(filter = "isotonic")
```

You should see output similar to:

```
> devtools::test(filter = "isotonic-normal")
ℹ Testing PeakSegOptimal
✔ | F W  S  OK | Context
✔ |         14 | Isotonic Regression with Normal Loss                                       

══ Results ═════════════════════════════════════════════════════════════════════════════════
[ FAIL 0 | WARN 0 | SKIP 0 | PASS 14 ]
> 
```

### Testing PeakSegFPOPLog

To test the PeakSegFPOPLog functionality:

```r
devtools::test(filter = "FPOPLog")
```

Expected output:

```
> devtools::test(filter = "FPOPLog")
ℹ Testing PeakSegOptimal
✔ | F W  S  OK | Context
✔ |          3 | FPOPLog

══ Results ═════════════════════════════════════════════════════════════════════════════════
[ FAIL 0 | WARN 0 | SKIP 0 | PASS 3 ]
```

### Manual Testing

You can manually test the isotonic regression function:

```r
library(PeakSegOptimal)

# Generate test data
set.seed(123)
data.vec <- rnorm(20)
data.vec[5:10] <- data.vec[5:10] + 2
data.vec[15:20] <- data.vec[15:20] + 3

# Run isotonic regression with different penalty values
result0 <- IsotonicRegression(data.vec, penalty=0) # No penalty
result5 <- IsotonicRegression(data.vec, penalty=5) # Medium penalty
result100 <- IsotonicRegression(data.vec, penalty=100) # High penalty

# Compare number of segments
nrow(result0)   # Many segments (no penalty)
nrow(result5)   # Fewer segments
nrow(result100) # Single segment

# Visualize results
plot(data.vec, type="p", pch=20)
lines(rep(result0$mean, result0$end - result0$start + 1), col="blue")
lines(rep(result5$mean, result5$end - result5$start + 1), col="red")
lines(rep(result100$mean, result100$end - result100$start + 1), col="green")
legend("topleft", legend=c("No penalty", "Medium penalty", "High penalty"), 
       col=c("blue", "red", "green"), lty=1)
```

## Project Challenge: Hard Test Solution

This project implements a regularized isotonic regression solver for normal loss, addressing the following challenge:

> ### Hard
> There is not yet an regularized isotonic regression solver for the normal loss ([issue](https://github.com/tdhock/coseg/issues/3)), and your goal in this test is to implement one. Like the unconstrained model described the Medium test, the regularized isotonic regression model also has only one state. So you can start by modifying the Medium test code, which should have a `cost_model_mat` which is N x 1. However the isotonic regression constraint means that all changes are non-decreasing, so you should use `set_to_min_less_of` instead of `set_to_unconstrained_min_of`. Now the difficult part: the existing code in the `coseg` package implements the Poisson loss via `class PoissonLossPieceLog`, but you need to implement another class for the Normal loss, `NormalLossPiece`. This class will need to declare different coefficients `Constant`, `Linear`, `Quadratic` for a function f(mean)=Constant + Linear*mean + Quadratic*mean^2. You will need to provide implementations for `get_smaller_root` and `get_larger_root` by using the `sqrt` function in `#include <math.h>`. It will be judged even better if you can get `PoissonLossPieceLog` and `NormalLossPiece` to inherit from the same base class with shared methods (that is the approach that the Segmentor package uses to implement several loss functions, and that is the approach that will be recommended for this GSOC project). Check your work by writing a `testthat` unit test to make sure that the model returned by your function with penalty=0 is the same as the model returned by the `isoreg` function (PAVA algorithm). Write another test that checks that the output model is the same as `Fpop` (when all changes are non-decreasing).

### Solution Components

Each file in the implementation addresses specific aspects of the challenge:

| File | Purpose | Challenge Component |
|------|---------|---------------------|
| **funPieceListLog.h** | Header file with class definitions | Defines the `LossPieceBase` base class that both `PoissonLossPieceLog` and `NormalLossPiece` inherit from; declares the `NormalLossPiece` class with `Quadratic`, `Linear`, and `Constant` coefficients |
| **funPieceListLog.cpp** | Implementation of loss functions | Implements `NormalLossPiece` methods including `get_smaller_root` and `get_larger_root` using `sqrt`; implements `set_to_min_less_of` for enforcing isotonic constraints |
| **IsotonicRegressionNormal.h** | Header for isotonic regression | Declares the function prototype for the solver |
| **IsotonicRegressionNormal.cpp** | C++ implementation | Implements the dynamic programming algorithm using `set_to_min_less_of` for isotonic constraints; handles penalty parameter for regularization |
| **IsotonicRegression.R** | R interface | Provides user-friendly access to the C++ solver; handles special cases and formatting of results |
| **NormalLoss.R** | Normal loss in R | Implements the weighted squared error loss function for testing and comparison |
| **interface.cpp** | C/R interface | Adds the `IsotonicRegressionNormal_interface` function to connect R with the C++ implementation |
| **test-isotonic-normal.R** | Comprehensive tests | Tests that the model matches `isoreg` (PAVA algorithm) when penalty=0; tests that the model matches FPOP with non-decreasing constraints |

## Approach

The implementation of isotonic regression with normal loss follows these key principles:

1. **Dynamic Programming**: The algorithm uses a dynamic programming approach to find the optimal segmentation under monotonicity constraints.

2. **Normal Loss Function**: Unlike the existing Poisson loss for count data, the normal loss is suitable for continuous data, implementing a squared error loss function.

3. **Regularization**: A penalty parameter allows controlling the number of segments, with higher penalties resulting in fewer segments.

4. **C++ Core with R Interface**: The core algorithm is implemented in C++ for efficiency, with a user-friendly R interface.

5. **Integration with Existing Framework**: The implementation follows the same pattern as other segmentation methods in the package, with consistent inputs and outputs.

## Implementation Details

### Added/Modified Files

#### R Files:
- **IsotonicRegression.R**: Main R interface for isotonic regression with normal loss
- **NormalLoss.R**: Implementation of the normal (squared error) loss function
- **PeakSegFPOPLog.R**: Fixed implementation for the PeakSegFPOPLog interface

#### C++ Files:
- **IsotonicRegressionNormal.cpp**: Core implementation of the isotonic regression algorithm
- **IsotonicRegressionNormal.h**: Header file declaring the function prototype
- **funPieceListLog.cpp**: Extended to include normal loss functionality
- **funPieceListLog.h**: Added base classes and normal loss pieces definitions
- **interface.cpp**: Added interface to the IsotonicRegressionNormal function

#### Test Files:
- **test-isotonic-normal.R**: Comprehensive tests for the isotonic regression implementation
- **test-FPOPLog.R**: Tests for PeakSegFPOPLog functionality

### Key Changes

1. **Base Class Architecture**:
   - Added `LossPieceBase` as a base class for different loss functions
   - Modified `PoissonLossPieceLog` to inherit from the base class
   - Added `NormalLossPiece` class for normal loss

2. **Normal Loss Implementation**:
   - Implemented quadratic loss functions
   - Added methods for finding roots, minimums, and computing costs
   
3. **Isotonic Constraint Handling**:
   - Implemented `set_to_min_less_of` for enforcing monotonicity constraints
   - Created specialized tests to ensure monotonicity

4. **Regularization**:
   - Added penalty parameter to control the number of change points
   - Implemented special cases for high penalties

5. **Integration with R**:
   - Created a comprehensive R interface
   - Added documentation and examples
   - Ensured compatibility with existing package functions

## License

This project is licensed under GPL-3.

## Contributing

Contributions are welcome! Please submit issues and pull requests through GitHub.


# Detailed Documentation of Transcendental-Programmer's Contributions to KCL

## Introduction to KCL and the Organization

KCL (Kubernetes Configuration Language) is a constraint-based record and functional language hosted under the Cloud Native Computing Foundation (CNCF) as a Sandbox Project. Primarily written in Rust (97.3% of the codebase), KCL was designed to enhance configuration management with improved validation, abstraction, and modularity.

The kcl-lang organization maintains the KCL language and its ecosystem, focusing on providing tools for cloud-native application configuration. KCL aims to solve common configuration challenges in the Kubernetes ecosystem and beyond by offering:

- Strong typing and validation capabilities
- Configuration abstraction and inheritance
- Policy as code functionality
- Integration with existing cloud-native toolchains

The language incorporates schema definitions, type checking, and built-in functions to ensure configuration correctness and maintainability.

## Contributions by Transcendental-Programmer

Transcendental-Programmer has made significant contributions to the KCL language, focusing on improving type correctness and enforcement. Below is a detailed analysis of their work as evidenced through recent pull requests and issues.

### 1. Fixed Return Type of Mathematical Functions (PR #1946)

**Pull Request**: [Fix: Ensure math.floor Returns an Integer Instead of a Float](https://github.com/kcl-lang/kcl/pull/1946)

**Status**: Merged ✅

**Related Issue**: [#1945: `math.floor` is returning a float](https://github.com/kcl-lang/kcl/issues/1945)

**Problem Analysis**:
The issue reported that the `math.floor()` function was returning a floating-point number (2.0) instead of an integer (2) when provided with a float input like 2.4. This was inconsistent with typical expectations for floor functions in programming languages and could cause unexpected behavior when the return value was used in integer-specific operations.

**Example from Issue**:
```python
import math

a = 2.4

a_floor = math.floor(a)
a_ceil = math.ceil(a)
```

Expected output:
```
a: 2.4
a_floor: 2
a_ceil: 3
```

Actual output before fix:
```
a: 2.4
a_floor: 2.0
a_ceil: 3
```

**Implementation Details**:
Transcendental-Programmer fixed this issue by ensuring the `math.floor()` function properly returns an integer value rather than a float with a zero decimal component. This aligns the function's behavior with mathematical conventions and user expectations.

### 2. Enhanced Type Safety for Schema Collections (PR #1949)

**Pull Request**: [fix: enforce type checking for list of schema elements](https://github.com/kcl-lang/kcl/pull/1949)

**Status**: Merged ✅

**Related Issue**: [#1948: KCL fails to enforce type safety when appending untyped dict to schema-typed list](https://github.com/kcl-lang/kcl/issues/1948)

**Problem Analysis**:
Prior to this fix, KCL allowed untyped dictionaries to be added to lists that were explicitly typed to contain only schema instances. This circumvented KCL's type system and could lead to runtime errors or unexpected behavior when processing these lists.

**Example from Issue**:
```python
schema Resource:
    kind: str
    apiGroup: str
    metadata: any
    spec: any

resource = Resource{
    kind = "Pod"
    apiGroup = "core"
    metadata = {
        name = "test"
    }
}

resource2 = Resource{
    kind = "Pod"
    apiGroup = "core"
    metadata = {
        name = "test"
    }
}

otherResource = {
    name = "test"
}

resourceList: [Resource] = [resource, resource2, otherResource]
```

Expected behavior: An evaluation error when assigning `otherResource` (an untyped dictionary) to `resourceList` (which should only contain `Resource` schema instances).

Actual behavior before fix: No evaluation error occurred, allowing type safety to be compromised.

**Implementation Details**:
Transcendental-Programmer implemented stricter type checking for lists with schema type annotations. After this fix, KCL properly validates that all elements in a schema-typed list conform to the specified schema type, preventing untyped dictionaries from being silently accepted when a schema type is expected.

## Impact of Contributions

The contributions by Transcendental-Programmer address important aspects of type safety and functional correctness in KCL:

1. **Improved Mathematical Function Consistency**: By fixing the `math.floor()` function's return type, numerical operations in KCL become more predictable and align better with user expectations, reducing potential bugs in numerical processing.

2. **Enhanced Type Safety**: The fix for schema-typed lists ensures that KCL's type system is properly enforced for collections, preventing type-related bugs from silently entering configuration code.

These improvements directly enhance KCL's reliability as a configuration language, especially in contexts where type correctness is critical for operational stability, such as in Kubernetes configuration management.

## Summary

Transcendental-Programmer has made valuable contributions to the KCL language by addressing two significant type-related issues:

1. Correcting the return type of the `math.floor()` function to return proper integers
2. Enforcing type safety for collections of schema elements

Both pull requests have been successfully merged into the KCL codebase, demonstrating their value to the project. These improvements help maintain KCL's promise of strong typing and validation, which are core features of the language designed to reduce configuration errors in cloud-native environments.


# Analysis of Kraken Application Outage Issue and Associated PRs

## Issue #409: Application Outage Scenario Failure with Empty Pod Selector

**Issue Description:**
Issue #409 in the krkn-chaos/krkn repository reports a critical bug where the application outage scenario fails to execute when the `pod_selector` parameter is empty in the configuration file. The error occurs during network policy creation with the error message:

```
Failed to run kubectl create -f kraken_network_policy.yaml -n boatload-1 --validate=false
```

The issue is triggered when users configure the application outage scenario with an empty pod selector:

```yaml
application_outage:
  duration: 30
  namespace: boatload-1
  pod_selector:                 # Empty pod selector causing the failure
  block: [Ingress, Egress]
```

This issue highlighted a lack of validation for the pod_selector parameter, which must contain at least one key-value pair to create a valid Kubernetes NetworkPolicy.

## PR #817: Fix Application Outage Empty Pod Selector

**Repository:** krkn-chaos/krkn  
**Author:** Transcendental-Programmer  
**Status:** Open  

This pull request addresses the root cause of Issue #409 by implementing proper validation and error handling in the application outage scenario plugin.

### Key Changes:

1. **Enhanced Parameter Validation:**
   - Added validation to ensure `pod_selector` is a non-empty dictionary
   - Improved validation for traffic_type parameter 
   - Added type checking for duration parameter

2. **Improved Error Handling:**
   - Added explicit error messages for invalid configuration parameters
   - Added better YAML parsing error handling
   - Added exception handling for network policy creation

3. **Code Structure Improvements:**
   - Separated the network policy creation logic
   - Added proper template rendering with Jinja2
   - Improved NetworkPolicy definition to include explicit ingress/egress rules

4. **Testing:**
   - Added comprehensive unit tests in `application_outage_test.py` 
   - Added integration tests in `application_outage_integration_test.py`
   - Tests cover various error cases including empty pod selectors

### Files Changed:
- `krkn/scenario_plugins/application_outage/application_outage_scenario_plugin.py` - Main implementation
- `tests/application_outage_test.py` - Unit tests (new file)
- `tests/application_outage_integration_test.py` - Integration tests (new file)
- `scenarios/openshift/app_outage.yaml` - Example configuration update
- `.gitignore` - Added test configuration files to gitignore

### Notable Code Improvements:

The PR improves the NetworkPolicy creation by using a more structured template:

```python
network_policy_template = """---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: {{ policy_name }}
  labels:
    app: krkn
    scenario: application-outage
spec:
  podSelector:
    matchLabels: {{ pod_selector }}
  policyTypes:
{% for type in traffic_type %}
    - {{ type }}
{% endfor %}
{% if "Ingress" in traffic_type %}
  ingress: []  # Empty array = deny all ingress traffic
{% endif %}
{% if "Egress" in traffic_type %}
  egress: []   # Empty array = deny all egress traffic
{% endif %}
"""
```

And adds critical validation:

```python
# Ensure pod_selector is a non-empty dictionary
if not pod_selector or not isinstance(pod_selector, dict):
    logging.error("pod_selector must be a non-empty dictionary of labels")
    return 1
```

## PR #67: Fix Application Outage POD_SELECTOR Format in Documentation

**Repository:** krkn-chaos/website  
**Author:** Transcendental-Programmer  
**Status:** Open  

This pull request updates the documentation to clarify the proper format for the pod_selector parameter and explain that it cannot be empty.

### Key Documentation Improvements:

1. **Expanded Main Documentation (_index.md):**
   - Added comprehensive overview section
   - Added use cases section
   - Detailed explanation of how the application outage scenario works
   - Added requirements section
   - Added monitoring and validation section
   - Added troubleshooting section
   - Added manual recovery instructions

2. **Updated Krkn Implementation Guide (application-outage-krkn.md):**
   - Added clear configuration parameters table
   - Added explicit warning about non-empty pod_selector requirement
   - Added sample configuration examples
   - Added testing instructions
   - Added troubleshooting tips

3. **Updated Krkn-hub Implementation Guide (application-outages-krkn-hub.md):**
   - Improved format and organization
   - Updated environment variable descriptions
   - Added clear examples for Docker and Podman
   - Added validation and monitoring instructions

### Files Changed:
- `content/en/docs/scenarios/application-outage/_index.md`
- `content/en/docs/scenarios/application-outage/application-outage-krkn.md`
- `content/en/docs/scenarios/application-outage/application-outages-krkn-hub.md`

### Notable Documentation Improvements:

The PR added clear guidance about pod_selector requirements:

```
> **Important**: The `pod_selector` parameter must be a non-empty dictionary of Kubernetes labels to select target pods. 
> A NetworkPolicy with an empty pod selector would apply to all pods in the namespace, which is not supported by this plugin.
```

And example configurations:

```yaml
application_outage:
  namespace: "app-namespace" 
  pod_selector:               # Target specific pods with these labels
    app: backend             # At least one label must be specified
    tier: database
  block:                     
    - Ingress              
  duration: 120             
```

## How the PRs Address Issue #409

Together, these PRs provide a complete solution to the issue:

1. **PR #817 (Code Fix):**
   - Ensures the plugin properly validates that pod_selector is not empty
   - Adds comprehensive error handling to provide clear error messages
   - Adds tests to ensure the validation works as expected

2. **PR #67 (Documentation Fix):**
   - Updates documentation to clearly state that pod_selector cannot be empty
   - Provides correct examples showing required format
   - Adds troubleshooting guidance for this specific issue

The combination of code fixes and documentation updates ensures that:
1. The actual bug is fixed in the implementation
2. Users are properly guided on correct configuration
3. Clear error messages are provided if misconfiguration occurs
4. Tests validate that the fix works properly

These changes improve the robustness of the application outage scenario plugin and prevent users from encountering similar issues in the future.


# Analysis of the "Exclude Label" Feature PRs in krkn-chaos Repositories

I'll provide a detailed breakdown of the three pull requests that introduce the "exclude label" feature to the krkn-chaos ecosystem.

## Overview of the Feature

The "exclude label" feature addresses a specific customer use case where users need to target a namespace with chaos testing but selectively exclude certain critical pods within that namespace. This functionality is particularly valuable when:

- Network policies restrict pods to the same namespace
- Users need to preserve specific monitoring or control pods during chaos testing
- A more granular approach to pod selection is needed beyond namespace and label selectors

## PR #61: Docs/add exclude label feature (krkn-chaos/website) - MERGED

This PR updates the documentation to explain the new feature.

### Files Changed:
1. `content/en/docs/scenarios/pod-network-scenario/_index.md`: Added a detailed section explaining the exclude_label feature
2. `content/en/docs/scenarios/pod-network-scenario/pod-network-chaos-krkn-hub.md`: Added parameter documentation
3. `content/en/docs/scenarios/pod-network-scenario/pod-network-scenarios-krkn.md`: Added examples of using exclude_label in YAML configurations

### Documentation Additions:
- Explains why you would use pod exclusion (preserve critical workloads)
- Shows how the pod selection process works with exclusion
- Provides YAML examples for different scenarios
- Documents the format ("key=value") for the exclude_label parameter

## PR #811: Feature/add exclude label (krkn-chaos/krkn) - OPEN

This PR implements the core functionality in the main krkn repository.

### Files Changed:
1. `docs/pod_network_scenarios.md`: Updated documentation with exclude_label examples
2. `krkn/scenario_plugins/native/pod_network_outage/kubernetes_functions.py`: 
   - Modified `list_pods()` to accept and process the exclude_label parameter
   - Added logic to filter out pods with matching labels
3. `krkn/scenario_plugins/native/pod_network_outage/pod_network_outage_plugin.py`:
   - Added `exclude_label` parameter to multiple functions including `get_test_pods()`
   - Modified InputParams, EgressParams, and IngressParams classes to include the new parameter
   - Updated function calls to pass the exclude_label parameter
4. `scenarios/plugin.schema.json`: Added exclude_label property to various schema definitions
5. `tests/__init__.py`: Added new empty file for testing
6. `tests/test_pod_network_outage.py`: Added unit tests for the exclude_label functionality

### Key Code Changes:
The most critical change is in the `list_pods` function:

```python
def list_pods(cli, namespace, label_selector=None, exclude_label=None):
    """
    Function used to list pods in a given namespace and having a certain label
    and excluding pods with exclude_label
    """
    # ...existing code...
    
    for pod in ret.items:
        # Skip pods with the exclude label if specified
        if exclude_label and pod.metadata.labels:
            exclude_key, exclude_value = exclude_label.split("=", 1)
            if (
                exclude_key in pod.metadata.labels
                and pod.metadata.labels[exclude_key] == exclude_value
            ):
                continue
        pods.append(pod.metadata.name)
```

## PR #163: Feature: add exclude_label parameter to list_pods method (krkn-chaos/krkn-lib) - OPEN

This PR adds the functionality to the underlying library used by krkn.

### Files Changed:
1. `src/krkn_lib/k8s/krkn_kubernetes.py`: 
   - Added exclude_label parameter to the list_pods method
   - Implemented filtering logic similar to the main krkn repo
2. `src/krkn_lib/tests/test_krkn_kubernetes_list.py`: 
   - Added tests for the exclude_label functionality
   - Tests various scenarios including pods with and without the exclude label

### Key Code Change:
```python
def list_pods(
    self, namespace: str, label_selector: str = None, exclude_label: str = None
) -> list[str]:
    """
    List pods in the given namespace
    :param namespace: namespace to search for pods
    :param label_selector: filter by label selector
        (optional default `None`)
    :param exclude_label: exclude pods matching this label
        in format "key=value" (optional default `None`)
    :return: a list of pod names
    """
    # ...existing code...
    
    for pod in ret_list.items:
        # Skip pods with the exclude label if specified
        if exclude_label and pod.metadata.labels:
            exclude_key, exclude_value = exclude_label.split("=", 1)
            if (
                exclude_key in pod.metadata.labels
                and pod.metadata.labels[exclude_key] == exclude_value
            ):
                continue
        pods.append(pod.metadata.name)
```

## Technical Implementation Details

The feature works by:

1. Accepting a new `exclude_label` parameter in the format "key=value"
2. First filtering all pods in the specified namespace
3. Excluding any pods that match the exclude_label
4. Then applying any existing label_selector filters
5. Finally, if specified, further filtering to a specific pod_name

The implementation includes thorough testing to verify edge cases like:
- What happens when no pods match the exclude label
- How pod selection works when both exclude_label and direct pod_name are specified
- Ensuring proper function when pods have multiple labels

## Use Case (From the Original Request)

The PR was initiated based on a customer request where:
> "The desired outcome is to kill all pods in a namespace but a single pod / workload. The excluded pod must run in the same namespace because of networkpolicy which doesn't allow to move it on another namespace."

This feature elegantly solves that problem by allowing users to precisely target their chaos experiments while preserving critical workloads.